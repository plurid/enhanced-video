import React, { Component } from 'react';
import Context from '../../context';

import {
    StyledTimescrollView,
    StyledTimescrollViewContainer,
} from './styled';

import TimescrollViewLine from '../TimescrollViewLine';

import { getWheelDirection } from '../../utils/wheelDirection';



class TimescrollView extends Component<
    any, any
> {
    static contextType = Context;

    private timescrollView: any = React.createRef();

    componentDidMount() {
        this.timescrollView.current.addEventListener('wheel', this.handleWheel, { passive: false});
    }

    componentWillUnmount() {
        this.timescrollView.current.removeEventListener('wheel', this.handleWheel);
    }

    public render() {
        const {
            videoTime,
            videoDuration,
        } = this.context;

        const hours = Math.floor(videoDuration / 3600);
        const minutes = Math.floor((videoDuration - 3600 * hours) / 60);
        // const seconds = Math.floor(videoDuration - (3600 * hours + 60 * minutes));

        const totalMinutes = hours * 60 + minutes;
        const total = Math.ceil(totalMinutes / 10);

        const lines = [];
        for (let i = 0; i < total; i++) {
            const line = (
                <TimescrollViewLine
                    startTime={10 * i}
                    endTime={10 * (i + 1)}
                    videoTime={videoTime}
                />
            );
            lines.push(line);
        }

        return (
            <StyledTimescrollView
                tabIndex={0}
                ref={this.timescrollView}
                onKeyDown={this.handleKeyDown}
            >
                <StyledTimescrollViewContainer>
                    <ul>
                        {
                            lines.map(line => {
                                return (
                                    <li
                                        key={Math.random() * 100000}
                                    >
                                        {line}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </StyledTimescrollViewContainer>
            </StyledTimescrollView>
        );
    }

    private handleKeyDown = (event: any) => {
        console.log(event.key);

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
}

export default TimescrollView;
