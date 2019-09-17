import { Dispatch, SetStateAction } from 'react';

import themes, { Theme } from '@plurid/apps.utilities.themes';



export interface TextSelectVideoProperties {
    src: string;
    type: string;

    theme?: keyof typeof themes;
    controls?: boolean;
    height?: number;
    qualitySources?: QualitySource[];
    about?: boolean;

    /**
     * Inline styling object for the video.
     */
    videoStyle?: any;

    /**
     * Function to be run after the video is loaded.
     */
    atLoad?: any;

    // To be specified when using another API than https://api.plurid.com
    // GraphlQL-based
    apiEndpoint?: string;
    // The apiKey contains the domain allowed to make requests
    // To be specified when using as a service provider
    // apiKey obtained from https://depict.plurid.com/api
    apiKey?: string;
    userToken?: string;
    deviewVideoID?: string;

    // updateDebounce?: number;

    // moreLimit?: number;
    // getTextOnLoad?: boolean;
}


export interface TextSelectVideoState {
    about?: boolean;
    controls?: boolean;
    theme?: any;
    themeName?: string;
    video?: any;

    apiEndpoint: string;
    updateDebounce: number;
    contentMoreLimit: number;

    qualitySources?: QualitySource[];
    selectedQualitySource: number;
    selectedQualitySourceSrc: string;

    timescrollView: boolean;
    textTimescrollView: boolean;

    videoContainerWidth: number;
    videoContainerHeight: number;

    videoBoxWidth: number;
    videoBoxHeight: number;
    videoBoxLeft: number;
    videoBoxTop: number;

    videoHeight: number;
    videoWidth: number;
    videoRatio: number;
    previousVideoVolume: number;
    videoVolume: number;
    videoPlaybackRate: number;
    videoTime: number;
    videoDuration: number;
    videoPlaying: boolean;
    loading: boolean;
    videoLoaded: boolean;
    imageSha: string;
    imageHeight: number;
    imageWidth: number;
    imageNaturalHeight: number;
    imageNaturalWidth: number;
    imageText: any;
    message: string;

    playVideo: () => void;
    pauseVideo: () => void;

    setVideoTime: (value: number) => void;
    setVideoVolume: (value: number) => void;
    setVideoPlaybackRate: (value: number) => void;

    toggleSettingsButton: () => void;
    toggledSettingsButton: boolean;
    toggleSettings: () => void;
    toggledSettings: boolean;
    toggleEditable: () => void;
    toggledEditable: boolean;

    editorWidth: number;
    setEditorWidth: (value: number) => any;

    createTextVideo: () => any;
    duplicateTextVideo: (duplicateId: string) => any;
    updateTextVideo: (imageTextId: string, version: any) => any;
    updateTextVideoField: (id: string, element: string, value: any) => any;
    updateTextVideoBatch: (id: string, elements: any[]) => any;
    deleteTextVideo: (id: string) => any;

    getText: () => any;
    getAndSetText: () => any;
    extractText: () => any;
    saveVideoText: () => any;

    toggleTimescrollView: () => void;
    toggleTextTimescrollView: () => void;
    toggleVideoVolume: () => void;

    selectQualitySource: (value: number) => void;
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


    loadedVideo: boolean;
    videoDuration: number;
    videoDimensions: VideoDimensions;
    videoContainerDimensions: VideoContainerDimensions;
    videoBoxDimensions: VideoBoxDimensions;

    videoPlaying: boolean;
    playVideo: () => void,
    pauseVideo: () => void,

    videoVolume: number;
    toggleVideoVolume: any;
    setVideoVolume: any;
    handleVideoVolume: any;

    videoPlaybackRate: number;
    setVideoPlaybackRate: any;
    handleVideoPlaybackRate: any;

    editableText: boolean;
    setEditableText: any;

    qualitySource: any;
    setQualitySource: any;
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
