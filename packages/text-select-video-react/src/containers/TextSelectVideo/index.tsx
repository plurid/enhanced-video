import React from 'react';

import './styles.css';
import {
    StyledTextSelectVideo,
} from './styled';

import {
    TextSelectVideoProperties,
} from '../../interfaces';



const TextSelectVideo: React.FC<TextSelectVideoProperties> = () => {
    return (
        <StyledTextSelectVideo>
            text select video
        </StyledTextSelectVideo>
    );
}


export default TextSelectVideo;
