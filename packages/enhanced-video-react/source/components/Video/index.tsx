import React from 'react';

import {
    StyledVideo,
} from './styled';



interface VideoProperties {
    src: string;
    type: string;
}

const Video: React.FC<VideoProperties> = (properties) => {
    const {
        src,
        type,
    } = properties;

    return (
        <StyledVideo>
            <video
                // height={height}
                // style={videoStyle ? {...videoStyle} : {}}
                // ref={video}
                // onTimeUpdate={handleVideoCurrentTime}
                // onLoadedData={handleLoadedVideo}
                // onLoadedMetadata={handleLoadedMetadata}
                // onEnded={handleVideoEnded}
                width="530"
                height="300"
            >
                <source
                    src={src}
                    type={type}
                />
            </video>
        </StyledVideo>
    );
}


export default Video;
