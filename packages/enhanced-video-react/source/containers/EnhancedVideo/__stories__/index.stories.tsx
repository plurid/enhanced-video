import React, {
    useState,
    useEffect,
} from 'react';

// import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import {
    withKnobs,
    boolean,
    // number,
    select,
    text,
} from '@storybook/addon-knobs';

import EnhancedVideo from '../';



// const actions = {
//     // atClick: action('atClick'),
// };

// const themeLabel = 'Theme';
// const computeThemeOptions = () => {
//     const options: any = {};
//     for (const key of Object.keys(themes)) {
//         options[key] = key;
//     }
//     return options;
// }
// const themeOptions = computeThemeOptions();
// const defaultThemeValue = 'plurid';

storiesOf(
    'EnhancedImage',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    // const theme = select(themeLabel, themeOptions, defaultThemeValue);


    return (
        <div
            style={{
                padding: '4rem',
                width: '800px',
            }}
        >
            <EnhancedVideo
                src="/assets/video.mov"
                type="video/mp4"
            />
        </div>
    );
});
