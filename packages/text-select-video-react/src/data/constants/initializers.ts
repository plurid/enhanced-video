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

        xCoordPercentage: 5,
        yCoordPercentage: 5,

        perspective: '',
        rotation: '',
        skew: '',

        viewable: false,
        alwaysShow: false,

        color: 'white',

        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'Arial',
        fontSizePercentage: 5,
        letterSpacingPercentage: 0,
        wordSpacingPercentage: 0,
        lineHeightPercentage: 0,

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
