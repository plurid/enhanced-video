export interface VideoTextVersionTime {
    start: number;
    end: number;
}


export interface VideoTextVersionPosition {
    x: number; // x position percent
    y: number; // y position percent
}


export interface VideoTextVersionTransform {
    perspective: number;
    rx: number; // x rotation
    ry: number; // y rotation
    rz: number; // z rotation
    sx: number; // x skew
    sy: number; // y skew
}


export interface VideoTextVersionKeyframe {
    id: string;
    name?: string;
    easing: string;
    time: VideoTextVersionTime;
    position: VideoTextVersionPosition;
    transform: VideoTextVersionTransform;
}


export interface VideoTextVersion {
    id: string;
    type: 'TEXTAREA' | 'TEXTLINE';

    time: VideoTextVersionTime;
    position: VideoTextVersionPosition;
    transform: VideoTextVersionTransform;

    keyframes?: VideoTextVersionKeyframe[];

    // startTime: number;
    // endTime: number;

    // xPercent: number;
    // yPercent: number;

    // perspective: number;
    // xRotation: number;
    // yRotation: number;
    // zRotation: number;
    // xSkew: number;
    // ySkew: number;

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

    font: {
        weight: string;             // font weight (bold)
        style: string;              // font style (italic)
        family: string;             // font family
        size: number;               // font size percent
        letterSpacing: number;      // letter spacing percent
        wordSpacing: number;        // word spacing percent
        lineHeight: number;         // line height percent
    };

    // fontWeight: string;
    // fontStyle: string;
    // fontFamily: string;
    // fontSizePercent: number;
    // letterSpacingPercent: number;
    // wordSpacingPercent: number;
    // lineHeightPercent: number;

    content: string;

    link: {
        active: boolean;
        to: string;
    };

    // link: boolean;
    // linkTo: string;
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
