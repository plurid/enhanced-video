import React from 'react';

import TextSelectVideo from '@plurid/text-select-video-react';




interface EnhancedVideoProperties {
    src: string;
    type: string;
    theme?: string;
    controls?: boolean;
    height?: string;
    qualitySources: any;
}


const EnhancedVideo: React.FC<EnhancedVideoProperties> = (properties) => {
    const {
        src,
        type,
        theme,
        controls,
        height,
        qualitySources,
    } = properties;

    return (
        <div>
            <TextSelectVideo
                src={src}
                type={type}
                theme={theme || 'dusk'}
                controls={controls || true}
                height={height || '500'}
                qualitySources={qualitySources}
            />
        </div>
    );
}

export default EnhancedVideo;
