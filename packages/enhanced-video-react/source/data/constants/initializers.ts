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

        position: {
            x: 5,
            y: 5,
        },

        transform: {
            perspective: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 0,
            sy: 0,
        },

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

        content: 'New Text',

        link: {
            active: false,
            to: '',
        },
    };

    const newText: VideoText = {
        id: textID,
        currentVersionId: versionID,
        versions: [newVersion],
    };

    return newText;
}
