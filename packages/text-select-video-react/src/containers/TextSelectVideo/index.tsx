import React from 'react';

import './styles.css';
import {
    StyledTextSelectVideo,
} from './styled';

import {
    TextSelectVideoProperties,
} from '../../interfaces';



const TextSelectVideo: React.FC<TextSelectVideoProperties> = (properties) => {
    const {
        src,
        type,
    } = properties;

    return (
        <StyledTextSelectVideo>
            <video
                // width={width}
                // height={height}
                // style={{...videoStyle}}
                // ref={video}
                // onTimeUpdate={this.setVideoCurrentTime}
                // onLoadedData={this.handleLoadedVideo}
                // onLoadedMetadata={this.handleLoadedMetadata}
            >
                <source
                    src={src}
                    type={type}
                />
            </video>
        </StyledTextSelectVideo>
    );
}


export default TextSelectVideo;
