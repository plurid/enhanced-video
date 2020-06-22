import React, {
    useContext,
} from 'react';

import {
    StyledLegacyBar,
} from './styled';

import LegacyTimeline from './components/Timeline';
import LegacyControls from './components/Controls';

import Context from '../../services/context';



const LegacyBar: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        videoTime,
        mouseOver,
    } = context;


    /** render */
    return (
        <StyledLegacyBar
            show={mouseOver && videoTime !== 0}
        >
            <LegacyTimeline />

            <LegacyControls />
        </StyledLegacyBar>
    );
}


export default LegacyBar;
