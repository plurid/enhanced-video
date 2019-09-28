import { Dispatch, SetStateAction } from 'react';

import themes, { Theme } from '@plurid/utilities.themes';

import {
    VideoText,
    VideoTextVersion,
    VideoTextVersionTextarea,
    VideoTextVersionTextline,
} from './text';



export interface TextSelectVideoProperties {
    src: string;
    type: string;

    theme?: keyof typeof themes;
    controls?: boolean;
    height?: number;
    qualitySources?: QualitySource[];
    about?: boolean;
    loop?: boolean;
    microview?: boolean;

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


    // updateDebounce?: number;
    // moreLimit?: number;
    // getTextOnLoad?: boolean;
    action?: Action;
}


export interface Action {
    type: string;
    payload?: any;
}


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

    apiEndpoint: string;
    apiKey: string | undefined;
    userToken: string | undefined;
    deviewVideoID: string | undefined;

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



export {
    VideoText,
    VideoTextVersion,
    VideoTextVersionTextarea,
    VideoTextVersionTextline,
}
