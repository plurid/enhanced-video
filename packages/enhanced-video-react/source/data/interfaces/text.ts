export interface VideoTextVersion {
    id: string;
    type: 'TEXTAREA' | 'TEXTLINE';

    startTime: number;
    endTime: number;

    xPercent: number;
    yPercent: number;

    perspective: number;
    xRotation: number;
    yRotation: number;
    zRotation: number;
    xSkew: number;
    ySkew: number;

    viewable: boolean;
    alwaysShow: boolean;
}


export interface VideoTextVersionTextarea extends VideoTextVersion {
    type: 'TEXTAREA';
    [key: string]: any;
}


export interface VideoTextVersionTextline extends VideoTextVersion {
    type: 'TEXTLINE';

    color: string;

    fontWeight: string;
    fontStyle: string;
    fontFamily: string;
    fontSizePercent: number;
    letterSpacingPercent: number;
    wordSpacingPercent: number;
    lineHeightPercent: number;

    content: string;

    link: boolean;
    linkTo: string;
}


export interface VideoText {
    id: string;
    currentVersionId: string;
    versions: (VideoTextVersionTextline | VideoTextVersionTextarea)[];
}


export interface VideoData {
    videoSha: string;
    videoPath: string;
    videoSource: string;
    videoHeight: number;
    videoWidth: number;
    videoText: VideoText[];
    createdBy: string;
}
