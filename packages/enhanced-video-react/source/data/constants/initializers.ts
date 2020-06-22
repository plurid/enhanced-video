import {
    VideoText,
    VideoTextVersionTextline,
} from '../interfaces';

import uuid from '../../services/utilities/uuid';



export const createNewText = (
    videoTime: number,
) => {
    const textID = uuid();
    const versionID = uuid();

    const newVersion: VideoTextVersionTextline = {
        id: versionID,
        type: 'TEXTLINE',

        startTime: videoTime,
        endTime: videoTime + 10,

        xPercent: 5,
        yPercent: 5,

        perspective: 0,
        xRotation: 0,
        yRotation: 0,
        zRotation: 0,
        xSkew: 0,
        ySkew: 0,

        viewable: false,
        alwaysShow: false,

        color: 'white',

        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'Arial',
        fontSizePercent: 5,
        letterSpacingPercent: 0,
        wordSpacingPercent: 0,
        lineHeightPercent: 0,

        content: 'New Text',

        link: false,
        linkTo: '',
    };

    const newText: VideoText = {
        id: textID,
        currentVersionId: versionID,
        versions: [newVersion],
    };

    return newText;
}



// import {
//     ITextSelectVideoData,
//     IVideoTextVersion,
// } from '../interfaces/image-text';



// export const emptyVideoText: any[] = [];


// export const emptyTextSelectVideo: ITextSelectVideoData = {
//     imageSha: '',
//     imagePath: '',
//     imageSource: '',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageText: emptyVideoText,
//     createdBy: '',
// };


// export const newTextVideoVersion: IVideoTextVersion = {
//     id: '',
//     createdBy: '',
//     computerGenerated: false,
//     userGenerated: true,
//     ownerGenerated: false,
//     adminGenerated: false,
//     startTime: 0,
//     endTime: 0,
//     xCoordPercentage: 5,
//     yCoordPercentage: 10,
//     perspective: '',
//     rotation: '',
//     skew: '',
//     color: 'white',
//     fontFamily: 'Arial',
//     fontSizePercentage: 5,
//     bold: false,
//     italic: false,
//     letterSpacingPercentage: 0,
//     lineHeight: 'auto',
//     wordSpacingPercentage: 0,
//     content: 'New Text',
//     link: false,
//     linkTo: '',
//     viewable: false,
//     alwaysShow: false,
// };
