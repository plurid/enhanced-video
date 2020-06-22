import React, {
    useContext,
    useRef,
} from 'react';

import {
    StyledLegacyTimeline,
    StyledCurrentTime,
} from './styled';

import Context from '../../../../services/context';



const LegacyTimeline: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        videoTime,
        videoDuration,

        handleVideoTime,
    } = context;


    /** references */
    const timeline = useRef<HTMLDivElement>(null);


    /** computed */
    const width = videoTime / videoDuration * 100;


    /** handlers */
    const setTime = (event: React.MouseEvent) => {
        if (!timeline.current) {
            return;
        }

        const clientX = event.clientX;

        const {
            width,
            left,
        } = timeline.current.getBoundingClientRect();

        const timePercentage = (clientX - left) / width * 100;
        const videoTime = timePercentage * videoDuration / 100;

        if (videoTime < videoDuration) {
            handleVideoTime(videoTime);
        } else {
            handleVideoTime(videoDuration);
        }
    }


    /** render */
    return (
        <StyledLegacyTimeline
            ref={timeline}
            onClick={setTime}
        >
            <StyledCurrentTime
                style={{
                    width: width + '%',
                }}
            />
        </StyledLegacyTimeline>
    );
}


export default LegacyTimeline;
