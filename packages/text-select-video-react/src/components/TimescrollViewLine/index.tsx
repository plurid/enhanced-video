import React, { PureComponent } from 'react';

import {
    StyledTimescrollViewLine,
    StyledTimescrollViewLineViewArea,
    StyledTimescrollViewLineViewed,
    StyledTimescrollViewLineTime,
    StyledTimescrollViewLineStartTime,
    StyledTimescrollViewLineEndTime,
    StyledTimescrollViewLineCurrentTime,
} from './styled';

import Context from '../../context';

import { formatTimeString } from '../../utils/timeString';



class TimescrollViewLine extends PureComponent<
    any, any
> {
    static contextType = Context;

    private viewlineTime: any = React.createRef();

    public render() {
        console.log('render');

        const {
            startTime,
            endTime,
            videoTime,
            firstLine,
            lastLine,
            textTimescroll,
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

                    <StyledTimescrollViewLineTime>
                        <StyledTimescrollViewLineStartTime>
                            {startTimeString}
                        </StyledTimescrollViewLineStartTime>

                        <StyledTimescrollViewLineEndTime>
                            {endTimeString}
                        </StyledTimescrollViewLineEndTime>
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
        } = this.context;

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
            addTextFramesMode,
            addTextSequenceMode,
            toggleAddingText,
        } = this.props;

        if (addTextFramesMode || addTextSequenceMode) {
            toggleAddingText();
        }

        console.log(addTextFramesMode, addTextSequenceMode);
    }

    private addingText = () => {
        const {
            addingText,
        } = this.props;

        if (addingText) {
            console.log('adding text');
        }
    }
}

export default TimescrollViewLine;
