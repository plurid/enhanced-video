import React, {
    useRef,
    useContext,
} from 'react';
import Context from '../../../../services/utilities/context';

import {
    StyledTimeline,
    StyledTimelineArea,
    StyledTimelineViewed,
    StyledTimelineCurrentTime,

    StyledTimelineTime,
} from './styled';

import { formatTimeString } from '../../../../services/utilities/timeString';




interface TimelineProperties {
    first: boolean;
    last: boolean;
    startTime: number;
    endTime: number;
    videoTime: number;
}

const Timeline: React.FC<TimelineProperties> = (properties) => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const timeline = useRef<HTMLDivElement>(null);

    const {
        first,
        last,
        startTime,
        endTime,
        videoTime,
    } = properties;

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

    const setTime = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const {
            handleVideoTime,
        } = context;

        const clientX = event.clientX;

        const {
            width,
            left,
        } = timeline.current!.getBoundingClientRect();

        const timePercentage = (clientX - left) / width * 100;
        const videoTime = (timePercentage * 600 / 100) + startTime * 60;

        handleVideoTime(videoTime);
    }

    return (
        <StyledTimeline
            ref={timeline}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setTime(event)}
        >
            <StyledTimelineArea
                first={first}
                last={last}
            >
                <StyledTimelineViewed
                    style={{
                        width: viewedWidth + '%',
                    }}
                >
                    <StyledTimelineCurrentTime
                        viewedWidth={viewedWidth}
                        currentTimeHours={currentTimeHours}
                    >
                        {currentTimeString}
                    </StyledTimelineCurrentTime>
                </StyledTimelineViewed>

                <StyledTimelineTime>
                    <div>
                        {startTimeString}
                    </div>

                    <div>
                        {endTimeString}
                    </div>
                </StyledTimelineTime>
            </StyledTimelineArea>
        </StyledTimeline>
    );
}


export default Timeline;
