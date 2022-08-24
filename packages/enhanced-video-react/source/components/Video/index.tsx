import React, {
    useContext,
    useState,
    useEffect,
} from 'react';

import {
    StyledVideo,
} from './styled';

import Context from '../../services/context';



export interface VideoProperties {
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

const Video: React.FC<VideoProperties> = (
    properties,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        playsInline,

        videoColorsInvert,
        videoColorsContrast,
        videoColorsHue,
        videoColorsSaturation,
        videoColorsBrightness,

        flipVertical,
        flipHorizontal,
    } = context;


    /** properties */
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


    /** state */
    const [filter, setFilter] = useState('');
    const [transform, setTransform] = useState('');


    /** effect */
    /** Handle colors. */
    useEffect(() => {
        const filter = `
            invert(${videoColorsInvert ? 1 : 0})
            contrast(${videoColorsContrast}%)
            hue-rotate(${videoColorsHue}deg)
            saturate(${videoColorsSaturation}%)
            brightness(${videoColorsBrightness}%)
        `;
        setFilter(filter);
    }, [
        videoColorsInvert,
        videoColorsContrast,
        videoColorsHue,
        videoColorsSaturation,
        videoColorsBrightness,
    ]);

    /** Handle flip. */
    useEffect(() => {
        const transform = `${flipVertical ? 'scaleX(-1)': ''} ${flipHorizontal ? 'scaleY(-1' : ''}`;
        setTransform(transform);
    }, [
        flipVertical,
        flipHorizontal,
    ]);


    /** render */
    return (
        <StyledVideo
            // height={height}
        >
            <video
                style={{
                    ...videoStyle,
                    filter: filter ? filter : undefined,
                    transform: transform ? transform : undefined,
                }}

                ref={videoRef}

                onTimeUpdate={atTimeUpdate}
                onLoadedData={atLoadedData}
                onLoadedMetadata={atLoadedMetadata}
                onEnded={atEnded}

                playsInline={playsInline}
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
