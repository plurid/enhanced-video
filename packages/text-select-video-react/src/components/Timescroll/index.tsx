import React, { Component } from 'react';

import {
    StyledTimescroll,
    StyledTimescrollTitle,
    StyledTimescrollArea,
    StyledTimescrollViewed,
    StyledTimescrollTime,
} from './styled';

import Context from '../../context';

import { getWheelDirection } from '../../utils/wheelDirection';



class Timescroll extends Component<
    any, any
> {
    static contextType = Context;

    timescrollArea: any = React.createRef();

    public state = {
        videoDurationHours: 0,
        videoDurationMiutes: 0,
        videoDurationFormat: '',
    }

    componentDidMount() {
        const {
            videoDuration,
        } = this.context;

        this.timescrollArea.current.addEventListener('wheel', this.handleWheel, { passive: false});

        const { hours, minutes, format } = this.formatTimeString(videoDuration);

        this.setState({
            videoDurationHours: hours,
            videoDurationMiutes: minutes,
            videoDurationFormat: format,
        });
    }

    componentWillUnmount() {
        this.timescrollArea.current.removeEventListener('wheel', this.handleWheel);
    }

    public render() {
        const {
            videoDurationFormat,
        } = this.state;

        const {
            videoTime,
        } = this.context;

        const timePercentage = this.computeTimePercentage();
        const currentTime = true;
        const videoTimeFormat = this.formatTimeString(videoTime, currentTime).format;

        return (
            <StyledTimescroll>
                <StyledTimescrollTitle>
                    Timescroll
                </StyledTimescrollTitle>

                <StyledTimescrollArea
                    tabIndex={0}
                    onClick={this.setTime}
                    ref={this.timescrollArea}
                    onKeyDown={this.handleKeyDown}
                >
                    <StyledTimescrollViewed
                        style={{
                            width: timePercentage + '%',
                        }}
                    />
                    <StyledTimescrollTime>
                        {videoTimeFormat}/{videoDurationFormat}
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

    private formatTimeString = (time: number, current?: boolean): any => {
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

        if (hours === 0) {
            if (current) {
                const {
                    videoDurationHours
                } = this.state;

                if (videoDurationHours > 0) {
                    const timestamp = {
                        hours,
                        minutes,
                        seconds,
                        format: '00:' + minutesString + ':' + secondsString,
                    }
                    return timestamp;
                }
            }

            const timestamp = {
                hours,
                minutes,
                seconds,
                format: minutesString + ':' + secondsString,
            }
            return timestamp;
        }

        if (minutes === 0 && hours === 0) {
            const timestamp = {
                hours,
                minutes,
                seconds,
                format: secondsString,
            }
            return timestamp;
        }

        const timestamp = {
            hours,
            minutes,
            seconds,
            format: hoursString + ':' + minutesString + ':' + secondsString,
        }
        return timestamp;
    }

    private handleKeyDown = (event: any) => {
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
        event.preventDefault();

        const deltas = {
            deltaX: event.deltaX,
            deltaY: event.deltaY,
        };

        const direction = getWheelDirection(deltas);

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

        console.log(direction);
        setVideoTime(newVideoTime);
    }
}

export default Timescroll;
