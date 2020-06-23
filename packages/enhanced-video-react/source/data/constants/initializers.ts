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

        time: {
            start: videoTime,
            end: videoTime + 10,
        },
        // startTime: videoTime,
        // endTime: videoTime + 10,

        position: {
            x: 5,
            y: 5,
        },
        // xPercent: 5,
        // yPercent: 5,

        transform: {
            perspective: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 0,
            sy: 0,
        },

        // perspective: 0,
        // xRotation: 0,
        // yRotation: 0,
        // zRotation: 0,
        // xSkew: 0,
        // ySkew: 0,

        viewable: false,
        alwaysShow: false,

        color: 'white',

        font: {
            weight: 'normal',
            style: 'normal',
            family: 'Arial',
            size: 4.5,
            letterSpacing: 0,
            wordSpacing: 0,
            lineHeight: 0,
        },
        // fontWeight: 'normal',
        // fontStyle: 'normal',
        // fontFamily: 'Arial',
        // fontSizePercent: 5,
        // letterSpacingPercent: 0,
        // wordSpacingPercent: 0,
        // lineHeightPercent: 0,

        content: 'New Text',

        link: {
            active: false,
            to: '',
        },
        // link: false,
        // linkTo: '',
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
