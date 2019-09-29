import React from 'react';

import TextSelectVideo from '@plurid/text-select-video-react';




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

    const _theme = theme || 'plurid';

    return (
        <div>
            <TextSelectVideo
                src={src}
                type={type}
                // theme={_theme}
                controls={controls || true}
                height={height || 500}
                // qualitySources={qualitySources}
            />
        </div>
    );
}

export default EnhancedVideo;
