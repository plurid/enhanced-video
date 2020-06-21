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

    /** render */
    return (
        <StyledLegacyBar>
            <LegacyTimeline />

            <LegacyControls />
        </StyledLegacyBar>
    );
}


export default LegacyBar;
