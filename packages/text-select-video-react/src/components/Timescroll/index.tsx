import React, { Component } from 'react';

import {
    StyledTimescroll,
    StyledTimescrollTitle,
    StyledTimescrollArea,
    StyledTimescrollViewed,
    StyledTimescrollTime,
} from './styled';

import Context from '../../context';



class Timescroll extends Component<
    any, any
> {
    static contextType = Context;

    timescrollArea: any = React.createRef();

    public render() {
        const {
            videoTime,
            videoDuration,
        } = this.context;

        const timePercentage = this.computeTimePercentage();

        const videoTimeFormatted = this.formatTimeString(videoTime);
        const videoDurationFormatted = this.formatTimeString(videoDuration);

        return (
            <StyledTimescroll>
                <StyledTimescrollTitle>
                    Timescroll
                </StyledTimescrollTitle>

                <StyledTimescrollArea
                    onClick={this.setTime}
                    ref={this.timescrollArea}
                >
                    <StyledTimescrollViewed
                        timePercentage={timePercentage}
                    />
                    <StyledTimescrollTime>
                        {videoTimeFormatted}/{videoDurationFormatted}
                    </StyledTimescrollTime>
                </StyledTimescrollArea>
            </StyledTimescroll>
        )
    }

    private computeTimePercentage = () => {
        const {
            videoTime,
            videoDuration,
        } = this.context;

        const timePercentage = videoTime / videoDuration * 100;
        return timePercentage;
    }

    private setTime = (event: any) => {
        const clientX = event.clientX;

        const {
            setVideoTime,
            videoDuration,
        } = this.context;

        const {
            width,
            left
        } = this.timescrollArea.current.getBoundingClientRect();

        const timePercentage = (clientX - left)/width * 100;

        const videoTime = timePercentage * videoDuration / 100;
        setVideoTime(videoTime);

        this.setState({
            timePercentage,
        });
    }

    private formatTimeString = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - 3600 * hours) / 60);
        const seconds = Math.floor(time - (3600 * hours + 60 * minutes));

        let hoursString = hours + '';
        let minutesString = '';
        let secondsString = '';

        if (minutes < 10) {
            minutesString = '0' + minutes;
        } else {
            minutesString = minutes + '';
        }

        if (seconds < 10) {
            secondsString = '0' + seconds;
        } else {
            secondsString = seconds + '';
        }

        let timestamp = '';
        if (hours === 0) {
            timestamp = minutesString + ':' + secondsString;
        } else if (minutes === 0) {
            timestamp = `${seconds}`;
        } else {
            timestamp = hoursString + ':' + minutesString + ':' + secondsString;
        }

        return timestamp;
    }
}

export default Timescroll;
