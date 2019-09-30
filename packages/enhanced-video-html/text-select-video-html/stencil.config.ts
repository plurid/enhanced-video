import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';



export const config: Config = {
    namespace: 'text-select-video-html',
    copy: [
        { src: 'test-assets' },
        { src: 'test-data' }
    ],
    outputTargets:[
        { type: 'dist' },
        { type: 'docs' },
        {
            type: 'www',
            serviceWorker: null
        }
    ],
    plugins: [
        sass(),
        inlineSvg(),
    ],
};
