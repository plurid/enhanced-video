import {
    ITextSelectVideoData,
    IVideoTextVersion,
} from '../interfaces/image-text';



export const emptyVideoText: any[] = [];


export const emptyTextSelectVideo: ITextSelectVideoData = {
    imageSha: '',
    imagePath: '',
    imageSource: '',
    imageHeight: 0,
    imageWidth: 0,
    imageText: emptyVideoText,
    createdBy: '',
};


export const newTextVideoVersion: IVideoTextVersion = {
    id: '',
    createdBy: '',
    computerGenerated: false,
    userGenerated: true,
    ownerGenerated: false,
    adminGenerated: false,
    startTime: 0,
    endTime: 0,
    xCoordPercentage: 5,
    yCoordPercentage: 10,
    perspective: '',
    rotation: '',
    skew: '',
    color: 'white',
    fontFamily: 'Arial',
    fontSizePercentage: 5,
    bold: false,
    italic: false,
    letterSpacingPercentage: 0,
    lineHeight: 'auto',
    wordSpacingPercentage: 0,
    content: 'New Text',
    link: false,
    linkTo: '',
    viewable: false,
    alwaysShow: true,
};
