export interface TextVersion {
    id: string;
    // createdBy: string;
    // computerGenerated: boolean;
    // userGenerated: boolean;
    // ownerGenerated: boolean;
    // adminGenerated: boolean;

    startTime: number;
    endTime: number;

    xCoordPercentage: number;
    yCoordPercentage: number;

    perspective: string;
    rotation: string;
    skew: string;

    color: string;

    fontFamily: string;
    fontSizePercentage: number;
    bold: boolean;
    italic: boolean;
    letterSpacingPercentage: number;
    lineHeight: string | number;
    wordSpacingPercentage: number;

    content: string;

    link: boolean;
    linkTo: string;
    viewable: boolean;
    alwaysShow: boolean;
}


export interface VideoText {
    id: string;
    currentVersionId: string;
    versions: TextVersion[];
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
