export interface ITextSelectVideoProps {
    about?: boolean;
    width?: string;
    height?: string;
    controls?: boolean;
    src: string;
    theme?: string;
    // imageText?: any;
    imageStyle?: any;
    atLoad?: any;

    // To be specified when using another API than https://api.plurid.com
    // GraphlQL-based
    apiEndpoint?: string;
    // The apiKey contains the domain allowed to make requests
    // To be specified when using as a service provider
    // apiKey obtained from https://depict.plurid.com/api
    apiKey?: string;
    updateDebounce?: number;

    moreLimit?: number;
    getTextOnLoad?: boolean;
}


export interface ITextSelectVideoState {
    apiEndpoint: string;
    updateDebounce: number;
    contentMoreLimit: number;

    theme: any;
    themeName: string;
    about: boolean;
    controls: boolean;

    videoContainerWidth: number;
    videoContainerHeight: number;

    videoBoxWidth: number;
    videoBoxHeight: number;
    videoBoxLeft: number;
    videoBoxTop: number;

    videoHeight: number;
    videoWidth: number;
    videoRatio: number;
    videoVolume: number;
    videoPlaybackRate: number;
    videoTime: number;
    videoDuration: number;
    video: any;
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
}
