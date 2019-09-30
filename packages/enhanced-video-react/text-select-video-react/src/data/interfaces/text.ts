export interface VideoTextVersion {
    id: string;
    type: 'TEXTAREA' | 'TEXTLINE';

    startTime: number;
    endTime: number;

    xCoordPercentage: number;
    yCoordPercentage: number;

    perspective: string;
    rotation: string;
    skew: string;

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
    fontSizePercentage: number;
    letterSpacingPercentage: number;
    wordSpacingPercentage: number;
    lineHeightPercentage: number;

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
