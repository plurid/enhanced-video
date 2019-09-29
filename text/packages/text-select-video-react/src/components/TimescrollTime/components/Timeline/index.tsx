import React, {
    useRef,
    useState,
    useContext,
} from 'react';
import Context from '../../../../services/utilities/context';

import {
    StyledTimeline,
    StyledTimelineArea,
    StyledTimelineViewable,
    StyledTimelineViewedContainer,
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

    const {
        theme,

        videoDuration,
        handleVideoTime,
    } = context;

    const [mouseOver, setMouseOver] = useState(false);

    const timeline = useRef<HTMLDivElement>(null);

    const {
        first,
        last,
        startTime,
        endTime,
        videoTime,
    } = properties;

    const startTimeString = formatTimeString(startTime * 60).format;
    const endTimeString = endTime !== videoDuration
        ? formatTimeString(endTime * 60).format
        : formatTimeString(endTime).format;

    let viewableWidth = 100;
    let viewedWidth = 0;
    let currentTimeString = '';
    let currentTimeHours = 0;

    if (last) {
        const timeMinutes = Math.floor((videoDuration / 60) - startTime);
        const timeMinutesPercentage = timeMinutes * 10;

        const timeSeconds = videoDuration - (timeMinutes * 60 + startTime * 60);
        const timeSecondsPercentage = (timeSeconds * 100 / 60)/10;

        viewableWidth = timeMinutesPercentage + timeSecondsPercentage;
    }

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

    const setTime = (event: React.MouseEvent) => {
        const clientX = event.clientX;

        const {
            width,
            left,
        } = timeline.current!.getBoundingClientRect();

        const timePercentage = (clientX - left) / width * 100;
        const videoTime = (timePercentage * 600 / 100) + startTime * 60;

        if (videoTime < videoDuration) {
            handleVideoTime(videoTime);
        } else {
            handleVideoTime(videoDuration);
        }
    }

    return (
        <StyledTimeline
            ref={timeline}
            onClick={(event: any) => setTime(event)}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            <StyledTimelineArea>
                <StyledTimelineViewedContainer
                    first={first}
                    last={last}
                    style={{
                        width: 100 + '%',
                    }}
                >
                    <StyledTimelineViewed
                        theme={theme}
                        viewedWidth={viewedWidth}
                        videoTime={videoTime}
                        videoDuration={videoDuration}
                        last={last}
                        mouseOver={mouseOver}
                        style={{
                            width: viewedWidth + '%',
                            borderTopRightRadius: last && videoDuration - videoTime < 10 ? '15px' : '0',
                            borderBottomRightRadius: last && videoDuration - videoTime < 10 ? '15px' : '0',
                        }}
                    >
                        <StyledTimelineCurrentTime
                            theme={theme}
                            viewedWidth={viewedWidth}
                            currentTimeHours={currentTimeHours}
                        >
                            {currentTimeString}
                        </StyledTimelineCurrentTime>
                    </StyledTimelineViewed>
                </StyledTimelineViewedContainer>

                <StyledTimelineViewable
                    theme={theme}
                    first={first}
                    last={last}
                    style={{
                        width: viewableWidth + '%',
                    }}
                    mouseOver={mouseOver}
                >
                    <StyledTimelineTime
                        theme={theme}
                    >
                        <div>
                            {startTimeString}
                        </div>

                        <div>
                            {endTimeString}
                        </div>
                    </StyledTimelineTime>
                </StyledTimelineViewable>
            </StyledTimelineArea>
        </StyledTimeline>
    );
}


export default Timeline;
