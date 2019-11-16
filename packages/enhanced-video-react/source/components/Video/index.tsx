import React from 'react';

import {
    StyledVideo,
} from './styled';



interface VideoProperties {
    src: string;
    type: string;
    height: any;
    videoRef: any;
}

const Video: React.FC<VideoProperties> = (properties) => {
    const {
        src,
        type,
        videoRef,
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
                width="100%"
                height="500"
                controls
                ref={videoRef}
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
