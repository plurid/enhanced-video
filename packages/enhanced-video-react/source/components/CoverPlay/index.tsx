import React from 'react';

import {
    StyledCoverPlay,
} from './styled';

import playIcon from '../../assets/icons/play-icon';



const CoverPlay: React.FC<any> = () => {
    /** render */
    return (
        <StyledCoverPlay>
            {playIcon}
        </StyledCoverPlay>
    );
}


export default CoverPlay;
