import React, { Component } from 'react';
import Context from '../../../services/utilities/context';

import {
    StyledTimescrollView,
    StyledTimescrollViewContainer,
    StyledTimescrollTextExtractContainer,
} from './styled';

import Button from '../Button';
import TimescrollViewLine from '../TimescrollViewLine';

import { getWheelDirection } from '../../../services/utilities/wheelDirection';



class TimescrollView extends Component<
    any, any
> {
    static contextType = Context;

    private timescrollView: any = React.createRef();

    state = {
        addTextFramesMode: false,
        addTextSequenceMode: false,
        addingText: false,
        lines: [],
        textFrames: [
            {
                id: '1',
                start: 220,
                end: 230,
            },
            {
                id: '2',
                start: 2450,
                end: 2560,
            },
        ],
        textSequences: [
            {
                id: '1',
                start: 240,
                end: 300,
            },
            {
                id: '2',
                start: 3850,
                end: 3960,
            },
        ],
        textBeginning: 0,
        textEnding: 0,
    }

    componentDidMount() {
        this.timescrollView.current.addEventListener('wheel', this.handleWheel, { passive: false});
    }

    componentWillUnmount() {
        this.timescrollView.current.removeEventListener('wheel', this.handleWheel);
    }

    public render() {
        const {
            theme,
            videoTime,
            videoDuration,
        } = this.context;

        const {
            textTimescroll,
        } = this.props;

        const {
            addTextFramesMode,
            addTextSequenceMode,
            addingText,
            textFrames,
            textSequences,
        } = this.state;

        const hours = Math.floor(videoDuration / 3600);
        const minutes = Math.floor((videoDuration - 3600 * hours) / 60);
        // const seconds = Math.floor(videoDuration - (3600 * hours + 60 * minutes));

        const totalMinutes = hours * 60 + minutes;
        const total = Math.ceil(totalMinutes / 10);
        const limit = total === 0 ? 1 : total;

        const lines = [];
        for (let i = 0; i < limit; i++) {
            const line = (
                <TimescrollViewLine
                    firstLine={i === 0}
                    lastLine={i === limit - 1}
                    startTime={10 * i}
                    endTime={10 * (i + 1)}
                    videoTime={videoTime}
                    textTimescroll={textTimescroll}
                    addTextFramesMode={addTextFramesMode}
                    addTextSequenceMode={addTextSequenceMode}
                    addingText={addingText}
                    toggleAddingText={this.toggleAddingText}
                    setTextBeginning={this.setTextBeginning}
                    setTextEnding={this.setTextEnding}
                    textFrames={textFrames}
                    textSequences={textSequences}
                    updateTextMark={this.updateTextMark}
                />
            );
            lines.push(line);
        }

        return (
            <StyledTimescrollView
                tabIndex={0}
                ref={this.timescrollView}
                onKeyDown={this.handleKeyDown}
                onMouseDown={this.handleMouseDown}
            >
                <StyledTimescrollViewContainer
                    textTimescroll={textTimescroll}
                >
                    <ul>
                        {
                            lines.map((line: any) => {
                                return (
                                    <li
                                        key={Math.random() * 100000}
                                    >
                                        {line}
                                    </li>
                                );
                            })
                        }

                        {/* <li>
                            <TimescrollViewLine
                                firstLine={true}
                                lastLine={true}
                                startTime={0}
                                endTime={10}
                                videoTime={videoTime}
                                textTimescroll={textTimescroll}
                                addTextFramesMode={addTextFramesMode}
                                addTextSequenceMode={addTextSequenceMode}
                                addingText={addingText}
                                toggleAddingText={this.toggleAddingText}
                                setTextBeginning={this.setTextBeginning}
                                setTextEnding={this.setTextEnding}
                                textFrames={textFrames}
                                textSequences={textSequences}
                                updateTextMark={this.updateTextMark}
                            />
                        </li> */}
                    </ul>

                    {textTimescroll && (
                        <StyledTimescrollTextExtractContainer
                            theme={theme}
                        >
                            <div>
                                <Button
                                    theme={theme}
                                    text="Add Text Frames"
                                    atClick={this.addTextFrames}
                                    pressed={addTextFramesMode}
                                />
                            </div>
                            <div>
                                <Button
                                    theme={theme}
                                    text="Add Text Sequence"
                                    atClick={this.addTextSequence}
                                    pressed={addTextSequenceMode}
                                />
                            </div>
                            <div>
                                Text Frames: 3
                            </div>
                            <div>
                                Text Sequence Seconds: 20.5
                            </div>
                            <div>
                                <Button
                                    theme={theme}
                                    text="Extract Text Frames"
                                    atClick={this.extractFrames}
                                />
                            </div>
                            <div>
                                <Button
                                    theme={theme}
                                    text="Extract Text Sequences"
                                    atClick={this.extractSequences}
                                />
                            </div>
                        </StyledTimescrollTextExtractContainer>
                    )}
                </StyledTimescrollViewContainer>
            </StyledTimescrollView>
        );
    }

    private handleMouseDown = (event: any) => {
        // console.log(event.target);
    }

    private handleKeyDown = (event: any) => {
        // console.log(event.key);

        const {
            videoTime,
            videoDuration,
            setVideoTime,
        } = this.context;

        let newVideoTime = videoTime;

        const smallTimeValue = 5;
        const largeTimeValue = 15;

        if (event.key === 'ArrowLeft' && !event.shiftKey) {
            newVideoTime = videoTime - smallTimeValue;
        }

        if (event.key === 'ArrowRight' && !event.shiftKey) {
            newVideoTime = videoTime + smallTimeValue;
        }

        if (event.key === 'ArrowLeft' && event.shiftKey) {
            newVideoTime = videoTime - largeTimeValue;
        }

        if (event.key === 'ArrowRight' && event.shiftKey) {
            newVideoTime = videoTime + largeTimeValue;
        }

        if (newVideoTime < 0) {
            newVideoTime = 0;
        }

        if (newVideoTime > videoDuration) {
            newVideoTime = videoDuration;
        }

        setVideoTime(newVideoTime);
    }

    private handleWheel = (event: any) => {
        const deltas = {
            deltaX: event.deltaX,
            deltaY: event.deltaY,
        };

        const direction = getWheelDirection(deltas);

        if (direction === 'up' || direction === 'down') {
            return;
        }

        event.preventDefault();

        const {
            videoTime,
            videoDuration,
            setVideoTime,
        } = this.context;

        const deltaTimeValue = 1;
        let newVideoTime = videoTime;

        if (direction === 'left') {
            newVideoTime = videoTime - deltaTimeValue;
        }

        if (direction === 'right') {
            newVideoTime = videoTime + deltaTimeValue;
        }

        if (newVideoTime < 0) {
            newVideoTime = 0;
        }

        if (newVideoTime > videoDuration) {
            newVideoTime = videoDuration;
        }

        setVideoTime(newVideoTime);
    }

    private addTextFrames = () => {
        this.setState((prevState: any) => ({
            addTextFramesMode: !prevState.addTextFramesMode,
            addTextSequenceMode: false,
        }));
    }

    private addTextSequence = () => {
        this.setState((prevState: any) => ({
            addTextFramesMode: false,
            addTextSequenceMode: !prevState.addTextSequenceMode,
        }));
    }

    private extractFrames = () => {
    }

    private extractSequences = () => {
    }

    private toggleAddingText = () => {
        this.setState((prevState: any) => ({
            addingText: !prevState.addingText,
        }));
    }

    private setTextBeginning = (textBeginning: number) => {
        this.setState({
            textBeginning,
        });
    }

    private setTextEnding = (textEnding: number) => {
        const {
            textBeginning,
        } = this.state;

        this.createTextMark(textBeginning, textEnding);

        this.setState({
            textEnding,
        });
    }

    private createTextMark = (beginning: number, ending: number) => {
        // console.log(beginning, ending);
        const {
            addTextFramesMode,
            addTextSequenceMode,
            textFrames,
            textSequences,
        } = this.state;

        const start = beginning < ending ? beginning : ending;
        const end = beginning < ending ? ending : beginning;

        if (addTextFramesMode) {
            const newTextFrames: any = [ ...textFrames ];

            const newTextFrame = {
                id: Math.random() * 10000 + '',
                start,
                end,
            };

            newTextFrames.push(newTextFrame);

            this.setState({
                textFrames: newTextFrames,
            });
        }

        if (addTextSequenceMode) {
            const newTextSequences: any = [ ...textSequences ];

            const newTextSequence = {
                id: Math.random() * 10000 + '',
                start,
                end,
            };

            newTextSequences.push(newTextSequence);

            this.setState({
                textSequences: newTextSequences,
            });
        }
    }

    private updateTextMark = (type: string, id: string, element: string, value: any) => {
        const {
            textFrames,
            textSequences,
        } = this.state;

        const textMarks = type === 'frame' ? [...textFrames] : [...textSequences];

        // const textMark = getTextMarkById(id, textMarks);
        const textMarksFiltered = textMarks.filter(mark => {
            if (mark.id === id) {
                return mark;
            }

            return false;
        });
        const textMark = {...textMarksFiltered[0]};
        textMark[element] = value;

        const updatedTextMarks = textMarks.map(mark => {
            if (mark.id === id) {
                return textMark;
            }

            return mark;
        });

        console.log(updatedTextMarks);
        if (type === 'frame') {
            this.setState({
                textFrames: updatedTextMarks,
            });
        } else {
            this.setState({
                textSequences: updatedTextMarks,
            });
        }
    }
}

export default TimescrollView;
