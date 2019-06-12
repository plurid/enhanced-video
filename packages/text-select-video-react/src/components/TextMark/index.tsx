import React, { Component } from 'react';

import {
    StyledTextMark,
} from './styled';



class TextMark extends Component<
    any, any
> {
    private textMark: any;

    public state = {
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
            dragging,
            dragType,
        } = this.state;

        const {
            id,
            type,
            start,
            end,
        } = this.props;

        console.log(id, type);

        return (
            <StyledTextMark
                type={type}
                start={start}
                end={end}
                dragging={dragging}
                dragType={dragType}

                onMouseDown={this.dragMouseDown}
                onMouseUp={this.dragMouseUp}

                ref={this.textMark}
            >
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
            dragType = 'leftHandle';
        } else if (clickLocationX + handleLimit > width) {
            dragType = 'rightHandle';
        } else {
            dragType = 'allHandle';
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

        const {
            dragType,
        } = this.state;

        event.preventDefault();

        console.log(dragType);

        const {
            pos3,
            pos4,
        } = this.state;

        const {
            offsetLeft,
            offsetTop,
        } = this.textMark.current;

        const pageX = event.pageX;
        const pageY = event.pageY;

        // calculate the new cursor position:
        const diffX = pageX - pos3;
        const diffY = pageY - pos4;

        this.setState({
            pos1: pos3,
            pos2: pos4,
            pos3: pageX,
            pos4: pageY,
            xCoord: offsetLeft + diffX,
            yCoord: offsetTop + diffY,
        });
    }
}


export default TextMark;
