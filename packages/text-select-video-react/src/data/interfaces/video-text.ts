export interface IVideoTextVersion {
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


export interface IVideoText {
    id: string;
    currentVersionId: string;
    versions: IVideoTextVersion[];
}


export interface ITextSelectVideoData {
    imageSha: string;
    imagePath: string;
    imageSource: string;
    imageHeight: number;
    imageWidth: number;
    imageText: IVideoText[];
    createdBy: string;
}
