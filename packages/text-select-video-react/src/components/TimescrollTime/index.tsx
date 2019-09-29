import React, {
    useContext,
    useRef,
    useEffect,
} from 'react';

import Context from '../../services/utilities/context';

import {
    StyledTimescrollTime,
    StyledTimescrollTimeContainer,
    StyledControls,
    StyledControlsLI,
} from './styled';

import Timeline from './components/Timeline';

import LoopIcon from '../../assets/loop-icon';
import MarkLoopIcon from '../../assets/mark-loop-icon';
import MicroviewIcon from '../../assets/microview-icon';
import MarkMicroviewIcon from '../../assets/mark-microview-icon';
import SceneIcon from '../../assets/scene-icon';
import MarkSceneIcon from '../../assets/mark-scene-icon';

import { getWheelDirection } from '../../services/utilities/wheelDirection';
import { range } from '../../services/utilities/array';



const TimescrollTime: React.FC<any> = () => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const timescroll = useRef<HTMLDivElement>(null);

    const {
        loop,
        microview,

        theme,

        loopVideo,
        setLoopVideo,

        microviewVideo,
        setMicroviewVideo,

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
    const indexes = range(0, limit);

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

                {(loop || microview) && (
                    <StyledControls
                        theme={theme}
                    >
                        <ul>
                            {loop && (
                                <>
                                    <StyledControlsLI
                                        theme={theme}
                                        active={loopVideo}
                                        onClick={() => setLoopVideo(show => !show)}
                                    >
                                        {MarkLoopIcon}
                                    </StyledControlsLI>

                                    <StyledControlsLI
                                        theme={theme}
                                        active={loopVideo}
                                        onClick={() => setLoopVideo(show => !show)}
                                    >
                                        {LoopIcon}
                                    </StyledControlsLI>
                                </>
                            )}

                            {microview && (
                                <>
                                    <StyledControlsLI
                                        theme={theme}
                                        active={microviewVideo}
                                        onClick={() => setMicroviewVideo(show => !show)}
                                    >
                                        {MarkMicroviewIcon}
                                    </StyledControlsLI>

                                    <StyledControlsLI
                                        theme={theme}
                                        active={microviewVideo}
                                        onClick={() => setMicroviewVideo(show => !show)}
                                    >
                                        {MicroviewIcon}
                                    </StyledControlsLI>
                                </>
                            )}

                            <StyledControlsLI
                                theme={theme}
                            >
                                {MarkSceneIcon}
                            </StyledControlsLI>

                            <StyledControlsLI
                                theme={theme}
                            >
                                {SceneIcon}
                            </StyledControlsLI>
                        </ul>
                    </StyledControls>
                )}
            </StyledTimescrollTimeContainer>
        </StyledTimescrollTime>
    );
}


export default TimescrollTime;
