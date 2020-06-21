import React, {
    useContext,
} from 'react';

import {
    StyledLegacyMask,
} from './styled';

import Context from '../../../services/context';

import LegacyBar from '../../../components/LegacyBar';



const LegacyMask: React.FC<any> = () => {
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    return (
        <StyledLegacyMask>
            <LegacyBar />
        </StyledLegacyMask>
    );
}


export default LegacyMask;
