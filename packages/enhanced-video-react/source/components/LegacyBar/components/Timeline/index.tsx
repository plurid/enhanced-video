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
    } = context;


    /** references */
    const timeline = useRef(null);


    /** computed */
    const width = videoTime / videoDuration * 100;


    /** render */
    return (
        <StyledLegacyTimeline
            ref={timeline}
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
