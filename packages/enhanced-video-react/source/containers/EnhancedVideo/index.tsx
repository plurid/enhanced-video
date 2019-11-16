import React, {
    useState,
    // useEffect,
} from 'react';

import {
    StyledEnhancedVideo,
} from './styled';

// import {
//     ThemeTypes,
// } from '../../data/types';


import themes from '@plurid/plurid-themes';

import Video from '../../components/Video';
// import Settings from '../../components/Settings';

// import TextSelectVideo, {
//     ACTIONS,
// } from '@plurid/text-select-video-react';



interface EnhancedVideoProperties {
    src: string;
    type: string;
    theme?: string;
    controls?: boolean;
    height?: number;
    qualitySources?: any;
}

const EnhancedVideo: React.FC<EnhancedVideoProperties> = (properties) => {
    const {
        src,
        type,
        theme,
        controls,
        height,
        // qualitySources,
    } = properties;

    const [showSettingsButton, setShowSettingsButton] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const [loadedVideo, setLoadedVideo] = useState(true);

    const [invertValue, setInvertValue] = useState(0);
    const [contrastValue, setContrastValue] = useState(100);
    const [hueValue, setHueValue] = useState(0);
    const [saturationValue, setSaturationValue] = useState(100);
    const [brightnessValue, setBrightnessValue] = useState(100);

    const _theme = theme && themes[theme] ? theme : 'plurid';
    const _controls = controls === undefined ? true : controls;

    const [textSelectAction, setTextSelectAction] = useState<any>({});

    return (
        <StyledEnhancedVideo>
            <Video
                src={src}
                type={type}
                height={height}
            />
            {/* <TextSelectVideo
                src={src}
                type={type}
                theme={_theme as ThemeTypes}
                controls={false}
                height={height || 500}
                videoStyle={{
                    filter: `
                        invert(${invertValue})
                        contrast(${contrastValue}%)
                        hue-rotate(${hueValue}deg)
                        saturate(${saturationValue}%)
                        brightness(${brightnessValue}%)
                    `,
                }}
                action={textSelectAction}
            /> */}

            {/* {loadedVideo && _controls && showSettingsButton && (
                <Settings />
            )} */}
        </StyledEnhancedVideo>
    );
}


export default EnhancedVideo;
