import React from 'react';

import './styles.css';
import {
    StyledTextSelectVideo,
    StyledTextSelectVideoNoRender,
} from './styled';

import {
    TextSelectVideoProperties,
} from '../../data/interfaces';



const TextSelectVideo: React.FC<TextSelectVideoProperties> = (properties) => {
    const {
        src,
        type,

        theme,
        controls,
        height,
        qualitySources,
        about,

        apiEndpoint,
        apiKey,
        userToken,
        deviewVideoID,

        videoStyle,
    } = properties;

    if (!src || !type) {
        return (
            <StyledTextSelectVideoNoRender>
                add the src and type properties to display the video
            </StyledTextSelectVideoNoRender>
        );
    }

    return (
        <StyledTextSelectVideo>
            <video
                height={height}
                style={videoStyle ? {...videoStyle} : {}}
                // ref={video}
                // onTimeUpdate={this.setVideoCurrentTime}
                // onLoadedData={this.handleLoadedVideo}
                // onLoadedMetadata={this.handleLoadedMetadata}
            >
                    <source
                        src={src + "#t=230"}
                        // src={src}
                        type={type}
                    />
            </video>

        </StyledTextSelectVideo>
    );
}


export default TextSelectVideo;
