import { Dispatch, SetStateAction } from 'react';

import themes, { Theme } from '@plurid/apps.utilities.themes';



export interface EnhancedVideoProperties {
    src: string;
    type: string;

    theme?: keyof typeof themes;
    controls?: boolean;
    height?: number;
    // qualitySources?: QualitySource[];
    about?: boolean;

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
}


export interface IContext {
    src: string;
    type: string;

    theme: Theme;
    controls: boolean;
    height: number;
    qualitySources: any;
    about: boolean;

    apiEndpoint: string;
    apiKey: string | undefined;
    userToken: string | undefined;
    deviewVideoID: string | undefined;

    showSettingsButton: boolean;
    setShowSettingsButton: Dispatch<SetStateAction<boolean>>;

    showSettingsMenu: boolean;
    setShowSettingsMenu: Dispatch<SetStateAction<boolean>>;

    editableText: boolean;
    setEditableText: Dispatch<SetStateAction<boolean>>;

    loadedVideo: boolean;
}
