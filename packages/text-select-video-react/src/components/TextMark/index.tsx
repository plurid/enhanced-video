import React, { Component } from 'react';

import {
    StyledTextMark,
    StyledTimeString,
    StyledStartTimeString,
    StyledEndTimeString,
} from './styled';

import {
    LEFT_HANDLE,
    RIGHT_HANDLE,
    MOVE_MARK,
} from './constants';

import { formatTimeString } from '../../utils/timeString';



class TextMark extends Component<
    any, any
> {
    private textMark: any;

    public state = {
        showTime: false,
        dragging: false,
        dragType: '',
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0,
    };

    constructor(props: any) {
        super(props);

        this.textMark = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.dragMouseUp);
        document.addEventListener('mousemove', this.dragMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.dragMouseUp);
        document.removeEventListener('mousemove', this.dragMouseMove);
    }

    public render() {
        const {
            showTime,
            dragging,
            dragType,
        } = this.state;

        const {
            data,
            type,
            start,
            end,
        } = this.props;

        // console.log(data.id, type);
        const width = end - start;

        const startTimeString = formatTimeString(data.start).format;
        const endTimeString = formatTimeString(data.end).format;

        return (
            <StyledTextMark
                type={type}
                start={start}
                end={end}
                dragging={dragging}
                dragType={dragType}

                onMouseDown={this.dragMouseDown}
                onMouseUp={this.dragMouseUp}
                onMouseEnter={this.toggleShowTime}
                onMouseLeave={this.toggleShowTime}

                ref={this.textMark}

                style={{
                    width: width + '%',
                    left: start + '%',
                }}
            >
                {showTime && (
                    <StyledTimeString>
                        <StyledStartTimeString>
                            {startTimeString}
                        </StyledStartTimeString>

                        <StyledEndTimeString>
                            {endTimeString}
                        </StyledEndTimeString>
                    </StyledTimeString>
                )}
            </StyledTextMark>
        );
    }

    private dragMouseDown = (event: any) => {
        event.preventDefault();

        const {
            clientX,
            pageX,
            pageY,
        } = event;

        const {
            width,
            left,
        } = this.textMark.current.getBoundingClientRect();

        const clickLocationX = clientX - left;
        const handleLimit = width < 20 ? 1 : 6;
        let dragType = '';
        if (clickLocationX < handleLimit) {
            dragType = LEFT_HANDLE;
        } else if (clickLocationX + handleLimit > width) {
            dragType = RIGHT_HANDLE;
        } else {
            dragType = MOVE_MARK;
        }

        this.setState({
            dragging: true,
            dragType,
            pos3: pageX,
            pos4: pageY,
        });
    }

    private dragMouseUp = () => {
        this.setState({
            dragging: false,
            dragType: '',
        });
    }

    private dragMouseMove = (event: any) => {
        const { dragging } = this.state;
        if (!dragging) { return; }

        event.preventDefault();

        const {
            dragType,
            pos3,
            pos4,
        } = this.state;

        const {
            type,
            data,
            updateTextMark,
            viewLineTime,
        } = this.props;

        const {
            pageX,
            pageY,
        } = event;

        // calculate the new cursor position:
        const diffX = pageX - pos3;
        const diffY = pageY - pos4;

        switch (dragType) {
            case LEFT_HANDLE:
                updateTextMark(type, data.id, 'start', viewLineTime);
                break;
            case RIGHT_HANDLE:
                updateTextMark(type, data.id, 'end', viewLineTime);
                break;
            case MOVE_MARK:
                console.log('move mark');
            default:
                console.log('move mark');
        }

        // this.setState({
        //     pos1: pos3,
        //     pos2: pos4,
        //     pos3: pageX,
        //     pos4: pageY,
        //     xCoord: offsetLeft + diffX,
        //     yCoord: offsetTop + diffY,
        // });
    }

    private toggleShowTime = () => {
        const {
            dragging
        } = this.state;

        if (!dragging) {
            this.setState((prevState: any) => ({
                showTime: !prevState.showTime,
            }));
        }
    }
}


export default TextMark;
