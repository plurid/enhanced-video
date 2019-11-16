import React from 'react';

import {
    StyledVideo,
} from './styled';



interface VideoProperties {
    src: string;
    type: string;

    videoRef: any;

    height: any;
    videoStyle: any;

    atTimeUpdate: any;
    atLoadedData: any;
    atLoadedMetadata: any;
    atEnded: any;
}

const Video: React.FC<VideoProperties> = (properties) => {
    const {
        src,
        type,

        videoRef,

        height,
        videoStyle,

        atTimeUpdate,
        atLoadedData,
        atLoadedMetadata,
        atEnded,
    } = properties;

    return (
        <StyledVideo>
            <video
                style={videoStyle ? {...videoStyle} : {}}

                height={height}
                ref={videoRef}

                onTimeUpdate={atTimeUpdate}
                onLoadedData={atLoadedData}
                onLoadedMetadata={atLoadedMetadata}
                onEnded={atEnded}
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
