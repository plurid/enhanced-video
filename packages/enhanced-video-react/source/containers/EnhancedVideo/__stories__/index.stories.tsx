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

    const generator = boolean('Generator', true);
    const development = boolean('Development', true);
    const silent = boolean('Silent', false);

    const settingsDrawers = select(
        'Settings Drawers',
        {
            'ALL': 'ALL',
            'TEXT': 'TEXT',
            'TOPOLOGY': 'TOPOLOGY',
            'VARIA': 'VARIA',
            'COLOR': 'COLOR',
        },
        'ALL',
    );
    const textDrawer = select(
        'Text Drawer',
        {
            'ALL': 'ALL',
            'REVEAL_TEXT': 'REVEAL_TEXT',
            'GET_TEXT': 'GET_TEXT',
            'EXTRACT_TEXT': 'EXTRACT_TEXT',
            'TRANSVIEW_TEXT': 'TRANSVIEW_TEXT',
        },
        'ALL',
    );
    const variaDrawer = select(
        'Varia Drawer',
        {
            'ALL': 'ALL',
            'VIEW_FULLSCREEN': 'VIEW_FULLSCREEN',
            'SHARE_IMAGE': 'SHARE_IMAGE',
            'DOWNLOAD_IMAGE': 'DOWNLOAD_IMAGE',
        },
        'ALL',
    );

    const mask = select(
        'Mask',
        {
            'Legacy': 'legacy',
            'Plurid': 'plurid',
        },
        'legacy',
    );

    const legacyToolbarControls = select(
        'Legacy Toolbar Controls',
        {
            'ALL': 'ALL',
            'PLAY_PAUSE': 'PLAY_PAUSE',
            'TIME': 'TIME',
            'VOLUME': 'VOLUME',
            'FULLSCREEN': 'FULLSCREEN',
            'MORE': 'MORE',
        },
        'ALL',
    );

    const cover = text('Cover', '');
    const accent = text('Accent', '');

    return (
        <div
            style={{
                padding: '4rem',
                width: '800px',
            }}
        >
            <EnhancedVideo
                // src="/assets/video.mov"
                src="/assets/long-video.mp4"
                type="video/mp4"

                mask={mask}
                cover={cover}
                // CoverPlay={() => (
                //     <div
                //         style={{
                //             color: 'white',
                //             display: 'grid',
                //             placeContent: 'center',
                //             height: '100%',
                //         }}
                //     >
                //         play
                //     </div>
                // )}
                accent={accent}

                generator={generator}
                development={development}
                silent={silent}

                settingsDrawers={[settingsDrawers]}
                textDrawer={[textDrawer]}
                variaDrawer={[variaDrawer]}

                legacyToolbarControls={[legacyToolbarControls]}
            />
        </div>
    );
});
