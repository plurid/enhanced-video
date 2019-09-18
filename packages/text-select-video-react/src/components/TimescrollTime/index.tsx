import React, {
    useContext,
    useRef,
    useState,
    useEffect,
} from 'react';

import Context from '../../services/utilities/context';

import {
    StyledTimescrollTime,
    StyledTimescrollTimeContainer,
} from './styled';

import Timeline from './components/Timeline';

import { getWheelDirection } from '../../services/utilities/wheelDirection';



const TimescrollTime: React.FC<any> = () => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const timescroll = useRef<HTMLDivElement>(null);

    const {
        videoTime,
        videoDuration,
        handleVideoTime,

        videoBoxDimensions,
    } = context;

    const hours = Math.floor(videoDuration / 3600);
    const minutes = Math.floor((videoDuration - 3600 * hours) / 60);

    const totalMinutes = hours * 60 + minutes;
    const total = Math.ceil(totalMinutes / 10);
    const limit = total === 0 ? 1 : total;

    const indexes = [];
    for (let i = 0; i < limit; i++) {
        indexes.push(i);
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
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

        handleVideoTime(newVideoTime);
    }

    const handleWheel = (event: WheelEvent) => {
        const deltas = {
            deltaX: event.deltaX,
            deltaY: event.deltaY,
        };

        const direction = getWheelDirection(deltas);

        if (direction === 'up' || direction === 'down') {
            return;
        }

        event.preventDefault();

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

        handleVideoTime(newVideoTime);
    }

    useEffect(() => {
        timescroll.current!.addEventListener('wheel', handleWheel);

        return () => {
            timescroll.current!.removeEventListener('wheel', handleWheel);
        };
    }, [videoTime]);

    return (
        <StyledTimescrollTime
            tabIndex={0}
            ref={timescroll}
            onKeyDown={handleKeyDown}

            style={{
                width: videoBoxDimensions.width + 'px',
                height: videoBoxDimensions.height + 'px',
                left: videoBoxDimensions.left + 'px',
                top: videoBoxDimensions.top + 'px',
            }}
        >
            <StyledTimescrollTimeContainer>
                <ul>
                    {indexes.map(timelineIndex => {
                        const first = timelineIndex === 0;
                        const last = timelineIndex === limit - 1;

                        const startTime = 10 * timelineIndex;
                        const endTimeAbsolute = 10 * (timelineIndex + 1);
                        const endTime = videoDuration > endTimeAbsolute * 60
                            ? endTimeAbsolute
                            : videoDuration;

                        return (
                            <li
                                key={timelineIndex}
                            >
                                <Timeline
                                    first={first}
                                    last={last}
                                    startTime={startTime}
                                    endTime={endTime}
                                    videoTime={videoTime}
                                />
                            </li>
                        );
                    })}
                </ul>
            </StyledTimescrollTimeContainer>
        </StyledTimescrollTime>
    );
}


export default TimescrollTime;
