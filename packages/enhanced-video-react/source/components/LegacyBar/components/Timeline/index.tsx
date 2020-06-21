import React, {
    useContext,
} from 'react';

import {
    StyledLegacyTimeline,
} from './styled';

import Context from '../../../../services/context';



const LegacyTimeline: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    /** render */
    return (
        <StyledLegacyTimeline>

        </StyledLegacyTimeline>
    );
}


export default LegacyTimeline;
