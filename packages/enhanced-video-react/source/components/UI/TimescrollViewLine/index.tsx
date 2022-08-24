import React, { PureComponent } from 'react';
import Context from '../../../services/context';

import {
    StyledTimescrollViewLine,
    StyledTimescrollViewLineViewArea,
    StyledTimescrollViewLineViewed,
    StyledTimescrollViewLineTime,
    StyledTimescrollViewLineCurrentTime,
} from './styled';

import TextMark from '../TextMark';

import { formatTimeString } from '../../../services/utilities/timeString';



class TimescrollViewLine extends PureComponent<
    any, any
> {
    static contextType = Context;

    private viewlineTime: any = React.createRef();

    state = {
        viewLineTime: 0,
    }

    public render() {
        console.log('render');

        const {
            viewLineTime,
        } = this.state;

        const {
            startTime,
            endTime,
            videoTime,
            firstLine,
            lastLine,
            textTimescroll,
            textFrames,
            textSequences,
            updateTextMark,
        } = this.props;

        const startTimeString = formatTimeString(startTime * 60).format;
        const endTimeString = formatTimeString(endTime * 60).format;

        let viewedWidth = 0;
        let currentTimeString = '';
        let currentTimeHours = 0;
        if (endTime * 60 < videoTime) {
            viewedWidth = 100;
        }

        if (startTime * 60 > videoTime) {
            viewedWidth = 0;
        }

        if (
            videoTime > startTime * 60
            && videoTime < endTime * 60
        ) {
            const currentTimeMinutes = Math.floor((videoTime / 60) - startTime);
            const currentTimeMinutesPercentage = currentTimeMinutes * 10;

            const currentTimeSeconds = videoTime - (currentTimeMinutes * 60 + startTime * 60);
            const currentTimeSecondsPercentage = (currentTimeSeconds * 100 / 60)/10;

            viewedWidth = currentTimeMinutesPercentage + currentTimeSecondsPercentage;

            const currentVideoTime = formatTimeString(videoTime);
            currentTimeString = currentVideoTime.format;
            currentTimeHours = currentVideoTime.hours;
        }

        let textFramesRender = (<></>);
        if (textFrames) {
            textFramesRender = textFrames.map((textFrame: any) => {
                const {
                    id,
                    start,
                    end,
                } = textFrame;

                if (start >= startTime * 60 && start <= endTime * 60) {
                    const startPercentage = (start - startTime * 60) * 100 / (10 * 60);
                    const endPercentage = (end - startTime * 60) * 100 / (10 * 60);

                    return (
                        <TextMark
                            type="frame"
                            key={id}
                            data={textFrame}
                            start={startPercentage}
                            end={endPercentage}
                            updateTextMark={updateTextMark}
                            viewLineTime={viewLineTime}
                        />
                    )
                }

                return;
            });
        }

        let textSequencesRender = (<></>);
        if (textSequences) {
            textSequencesRender = textSequences.map((textSequence: any) => {
                const {
                    id,
                    start,
                    end,
                } = textSequence;

                if (start >= startTime * 60 && start <= endTime * 60) {
                    const startPercentage = (start - startTime * 60) * 100 / (10 * 60);
                    const endPercentage = (end - startTime * 60) * 100 / (10 * 60);

                    return (
                        <TextMark
                            type="sequence"
                            key={id}
                            data={textSequence}
                            start={startPercentage}
                            end={endPercentage}
                            updateTextMark={updateTextMark}
                            viewLineTime={viewLineTime}
                        />
                    )
                }

                return;
            });
        }

        return (
            <StyledTimescrollViewLine
                ref={this.viewlineTime}
                onClick={!textTimescroll ? this.setTime : undefined}
                onMouseDown={textTimescroll ? this.setText : undefined}
                onMouseMove={textTimescroll ? this.addingText : undefined}
                // style={{
                //     width: lastLine ? '40%' : '100%'
                // }}
            >
                <StyledTimescrollViewLineViewArea
                    firstLine={firstLine}
                    lastLine={lastLine}
                >
                    <StyledTimescrollViewLineViewed
                        style={{
                            width: viewedWidth + '%',
                        }}
                        firstLine={firstLine}
                        lastLine={lastLine}
                    >
                        <StyledTimescrollViewLineCurrentTime
                            viewedWidth={viewedWidth}
                            currentTimeHours={currentTimeHours}
                        >
                            {currentTimeString}
                        </StyledTimescrollViewLineCurrentTime>
                    </StyledTimescrollViewLineViewed>

                    {textTimescroll && (
                        <>
                            {textFramesRender}
                            {textSequencesRender}
                        </>
                    )}

                    <StyledTimescrollViewLineTime>
                        <div>
                            {startTimeString}
                        </div>

                        <div>
                            {endTimeString}
                        </div>
                    </StyledTimescrollViewLineTime>
                </StyledTimescrollViewLineViewArea>
            </StyledTimescrollViewLine>
        );
    }

    private setTime = (event: any) => {
        console.log('click');

        const {
            startTime,
        } = this.props;

        const {
            setVideoTime,
        } = this.context as any;

        const clientX = event.clientX;

        const {
            width,
            left,
        } = this.viewlineTime.current.getBoundingClientRect();

        const timePercentage = (clientX - left)/width * 100;

        const videoTime = (timePercentage * 600 / 100) + startTime * 60;

        // console.log(videoTime);
        setVideoTime(videoTime);
    }

    private setText = (event: any) => {
        const {
            startTime,
            addTextFramesMode,
            addTextSequenceMode,
            toggleAddingText,
            setTextBeginning,
            setTextEnding,
            addingText,
        } = this.props;

        if (addTextFramesMode || addTextSequenceMode) {
            toggleAddingText();
        }

        const { clientX } = event;
        // console.log(event.clientX);

        const {
            width,
            left,
        } = this.viewlineTime.current.getBoundingClientRect();

        const timePercentage = (clientX - left)/width * 100;
        const viewLineTime = timePercentage / 100 * (10 * 60);
        // console.log('viewLineTime', viewLineTime);

        const startTimeSeconds = startTime * 60;
        // console.log('startTimeSeconds', startTimeSeconds);

        const time = startTimeSeconds + viewLineTime;

        if (addTextFramesMode || addTextSequenceMode) {
            setTextBeginning(time);
        }

        // console.log(time);
        // console.log(time / 60);
        // console.log(timePercentage);

        // console.log(addTextFramesMode, addTextSequenceMode);
    }

    private addingText = (event: any) => {
        const {
            startTime,
            addingText,
            setTextEnding,
        } = this.props;

        const { clientX } = event;
        // console.log(event.clientX);

        const {
            width,
            left,
        } = this.viewlineTime.current.getBoundingClientRect();

        const timePercentage = (clientX - left)/width * 100;
        const viewLineTime = timePercentage / 100 * (10 * 60);
        // console.log('viewLineTime', viewLineTime);

        const startTimeSeconds = startTime * 60;
        // console.log('startTimeSeconds', startTimeSeconds);

        const time = startTimeSeconds + viewLineTime;

        if (addingText) {
            console.log('adding text');
            setTextEnding(time);
        }

        this.setState({
            viewLineTime,
        });
    }
}

export default TimescrollViewLine;
