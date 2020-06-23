import {
    Dispatch,
    SetStateAction,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    VideoText,
    VideoTextVersion,
    VideoTextVersionTextarea,
    VideoTextVersionTextline,
} from './text';



export interface EnhancedVideoProperties {
    src: string;
    type: string;

    theme?: keyof typeof themes;
    controls?: boolean;
    height?: number;
    qualitySources?: QualitySource[];
    about?: boolean;
    loop?: boolean;
    microview?: boolean;

    generator?: boolean;
    development?: boolean;
    silent?: boolean;

    initialColors?: VideoColorsData;

    /**
     * Inline styling object for the video.
     */
    videoStyle?: any;

    /**
     * Function to be run after the video is loaded.
     */
    atLoad?: any;

    /**
     * To be specified when using another API than https://api.plurid.com.
     * GraphlQL-based.
     *
     * Default: https://api.plurid.com.
     */
    apiEndpoint?: string;

    /**
     * API key obtained from https://account.plurid.com/depict/api when using
     * the default apiEndpoint.
     */
    apiKey?: string;
    userToken?: string;
    deviewVideoID?: string;

    /**
     * Render the interface using the `'legacy'` or the `'plurid'` concepts.
     *
     * Default: `'plurid'`.
     */
    mask?: 'legacy' | 'plurid';

    /**
     * Cover image.
     */
    cover?: string;
    CoverPlay?: React.FC<any>;

    /**
     * Color used to accentuate features.
     */
    accent?: string;

    /**
     * Set the available features for the legacy toolbar.
     * `'ALL' | 'PLAY_PAUSE' | 'TIME' | 'VOLUME' | 'FULLSCREEN' | 'MENU'`
     *
     * Default `['ALL']`.
     */
    legacyToolbarControls?: LegacyToolbarControls[];

    // updateDebounce?: number;
    // moreLimit?: number;
    // getTextOnLoad?: boolean;
    action?: Action;

    /**
     * Specify which drawers to be available in the Settings Menu.
     *
     * Default: `['ALL']`.
     */
    settingsDrawers?: SettingsDrawer[];

    /**
     * Specify which actions to be available in the Text Drawer of the Settings Menu.
     * `('ALL' | 'REVEAL_TEXT' | 'GET_TEXT' | 'EXTRACT_TEXT')[]`
     *
     * Default: `['ALL']`.
     */
    textDrawer?: TextDrawer[];

    /**
     * Specify which actions to be available in the Varia Drawer of the Settings Menu.
     * `('ALL' | 'REVEAL_TEXT' | 'GET_TEXT' | 'EXTRACT_TEXT')[]`
     *
     * Default: `['ALL']`.
     */
    variaDrawer?: VariaDrawer[];
}


export interface Action {
    type: string;
    payload?: any;
}


export type LegacyToolbarControls =
    | 'ALL'
    | 'PLAY_PAUSE'
    | 'TIME'
    | 'VOLUME'
    | 'FULLSCREEN'
    | 'MORE';


export interface QualitySource {
    quality: string;
    src: string;
}


export interface IContext {
    src: string;
    type: string;

    theme: Theme;
    controls: boolean;
    height: number;
    qualitySources: any;
    about: boolean;
    loop: boolean;
    microview: boolean;

    generator: boolean;
    development: boolean;
    silent: boolean;

    cover: string | undefined;
    CoverPlay: React.FC<any> | undefined;

    settingsDrawers: SettingsDrawer[];
    textDrawer: TextDrawer[];
    variaDrawer: VariaDrawer[];

    accent?: string;
    legacyToolbarControls: LegacyToolbarControls[];

    apiEndpoint: string;
    apiKey: string | undefined;
    userToken: string | undefined;
    deviewVideoID: string | undefined;

    mouseOver: boolean;

    toggleFullscreen: () => void;
    viewAbout: () => void;

    setMessage: Dispatch<SetStateAction<string>>;
    setMessageTimed: (message: string, time: number) => void;
    setShowSpinner: Dispatch<SetStateAction<boolean>>;

    showSettingsButton: boolean;
    setShowSettingsButton: Dispatch<SetStateAction<boolean>>;

    showSettingsMenu: boolean;
    setShowSettingsMenu: Dispatch<SetStateAction<boolean>>;

    editableText: boolean;
    setEditableText: Dispatch<SetStateAction<boolean>>;

    loadedVideo: boolean;

    videoDuration: number;

    videoDimensions: VideoDimensions;
    videoContainerDimensions: VideoContainerDimensions;
    videoBoxDimensions: VideoBoxDimensions;

    videoPlaying: boolean;
    playVideo: () => void,
    pauseVideo: () => void,

    loopVideo: boolean;
    setLoopVideo: Dispatch<SetStateAction<boolean>>;
    loopVideoStart: number;
    setLoopVideoStart: Dispatch<SetStateAction<number>>;
    loopVideoEnd: number;
    setLoopVideoEnd: Dispatch<SetStateAction<number>>;

    microviewVideo: boolean;
    setMicroviewVideo: Dispatch<SetStateAction<boolean>>;
    microviewVideoStart: number;
    setMicroviewVideoStart: Dispatch<SetStateAction<number>>;
    microviewVideoEnd: number;
    setMicroviewVideoEnd: Dispatch<SetStateAction<number>>;

    videoVolume: number;
    toggleVideoVolume: () => void;
    handleVideoVolume: (volume: number) => void;

    videoPlaybackRate: number;
    handleVideoPlaybackRate: (videoPlaybackRate: number) => void;

    videoTime: number;
    handleVideoTime: (videoTime: number) => void;

    qualitySource: any;
    setQualitySource: any;

    showTimescrollTime: boolean;
    setShowTimescrollTime: Dispatch<SetStateAction<boolean>>;

    showTimescrollText: boolean;
    setShowTimescrollText: Dispatch<SetStateAction<boolean>>;

    videoText: VideoText[];

    addText: () => void;
    saveText: () => Promise<void>;
    getText: () => Promise<void>;

    videoColorsInvert: boolean;
    setVideoColorsInvert: Dispatch<SetStateAction<boolean>>;
    videoColorsContrast: number;
    setVideoColorsContrast: Dispatch<SetStateAction<number>>;
    videoColorsHue: number;
    setVideoColorsHue: Dispatch<SetStateAction<number>>;
    videoColorsSaturation: number;
    setVideoColorsSaturation: Dispatch<SetStateAction<number>>;
    videoColorsBrightness: number;
    setVideoColorsBrightness: Dispatch<SetStateAction<number>>;

    flipVertical: boolean;
    setFlipVertical: Dispatch<SetStateAction<boolean>>;
    flipHorizontal: boolean;
    setFlipHorizontal: Dispatch<SetStateAction<boolean>>;

    expandTextDrawer: boolean;
    setExpandTextDrawer: Dispatch<SetStateAction<boolean>>;
    expandColorDrawer: boolean;
    setExpandColorDrawer: Dispatch<SetStateAction<boolean>>;
    expandTopologyDrawer: boolean;
    setExpandTopologyDrawer: Dispatch<SetStateAction<boolean>>;
    expandVariaDrawer: boolean;
    setExpandVariaDrawer: Dispatch<SetStateAction<boolean>>;
}


export interface VideoDimensions {
    width: number;
    height: number;
    ratio: number;
}


export interface VideoContainerDimensions {
    width: number;
    height: number;
}


export interface VideoBoxDimensions {
    width: number;
    height: number;
    left: number;
    top: number;
}



export type SettingsDrawer =
    | 'ALL'
    | 'TEXT'
    | 'COLOR'
    | 'TOPOLOGY'
    | 'VARIA';

export type TextDrawer =
    | 'ALL'
    | 'REVEAL_TEXT'
    | 'GET_TEXT'
    | 'EXTRACT_TEXT'
    | 'TRANSVIEW_TEXT';

export type VariaDrawer =
    | 'ALL'
    | 'VIEW_FULLSCREEN';


export interface VideoColorsData {
    invert: number;
    contrast: number;
    hue: number;
    saturation: number;
    brightness: number;
}



export {
    VideoText,
    VideoTextVersion,
    VideoTextVersionTextarea,
    VideoTextVersionTextline,
}




// export interface EnhancedVideoProperties {
//     src: string;
//     type: string;

//     theme?: keyof typeof themes;
//     controls?: boolean;
//     height?: number;
//     // qualitySources?: QualitySource[];
//     about?: boolean;

//     /**
//      * Inline styling object for the video.
//      */
//     videoStyle?: any;

//     /**
//      * Function to be run after the video is loaded.
//      */
//     atLoad?: any;

//     /**
//      * To be specified when using another API than https://api.plurid.com.
//      * GraphlQL-based.
//      *
//      * Default: https://api.plurid.com.
//      */
//     apiEndpoint?: string;

//     /**
//      * API key obtained from https://account.plurid.com/depict/api when using
//      * the default apiEndpoint.
//      */
//     apiKey?: string;
//     userToken?: string;
//     deviewVideoID?: string;
// }


// export interface IContext {
//     src: string;
//     type: string;

//     theme: Theme;
//     controls: boolean;
//     height: number;
//     qualitySources: any;
//     about: boolean;

//     apiEndpoint: string;
//     apiKey: string | undefined;
//     userToken: string | undefined;
//     deviewVideoID: string | undefined;

//     showSettingsButton: boolean;
//     setShowSettingsButton: Dispatch<SetStateAction<boolean>>;

//     showSettingsMenu: boolean;
//     setShowSettingsMenu: Dispatch<SetStateAction<boolean>>;

//     editableText: boolean;
//     setEditableText: Dispatch<SetStateAction<boolean>>;

//     loadedVideo: boolean;
// }


export interface Slider {
    type: string;
    min?: number;
    max?: number;
    valueSign?: string;
}
