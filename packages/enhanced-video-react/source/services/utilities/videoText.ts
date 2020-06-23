// import uuidv4 from './uuid';

import {
    VideoText,
} from '../../data/interfaces';



export const getVersionById = (
    videoText: VideoText,
) => {
    const {
        currentVersionId,
        versions,
    } = videoText;

    const item = versions.find(version => version.id === currentVersionId);

    return item;
}


export const updateVersion = (
    videoText: any,
    version: any,
) => {
    const {
        currentVersionId,
        versions,
    } = videoText;

    videoText.versions = versions.map((vTxt: any) => {
        if (vTxt.id === currentVersionId) {
            const updatedVersion = {...vTxt, ...version};
            return updatedVersion;
        }
        return vTxt;
    });

    return videoText;
}


// export const pushNewVersion = (imageText: any, version: any) => {
//     const versionId = `tsi-text-${uuidv4()}`;

//     imageText.currentVersionId = versionId;
//     version.id = versionId;
//     imageText.versions.push(version);

//     return imageText;
// }


// export const checkDifferentTexts = (
//     previousText: any,
//     currentText: any
// ): boolean => {
//     if (previousText.currentVersionId === currentText.currentVersionId) {
//         const previousTextVersion = getVersionById(
//             previousText.currentVersionId,
//             previousText.versions
//         );
//         const currentTextVersion = getVersionById(
//             currentText.currentVersionId,
//             currentText.versions
//         );

//         if (previousTextVersion !== currentTextVersion) {
//             return true;
//         }
//         return false;
//     }
//     return true;
// }


// export const duplicateTextVideo = (
//     duplicateId: string,
//     imageText: IVideoText[],
// ): IVideoText[] => {
//     const updatedVideoText: IVideoText[] = [];

//     imageText.map((imgText: IVideoText) => {
//         updatedVideoText.push({ ...imgText });

//         if (imgText.id === duplicateId) {
//             const duplicateTextId = `tsi-text-${uuidv4()}`;
//             const currentVersionId = imgText.currentVersionId;
//             const getVersion = getVersionById(currentVersionId, imgText.versions);
//             const currentVersion = { ...getVersion };
//             const newVersionId = `tsi-version-${uuidv4()}`;
//             currentVersion.id = newVersionId;
//             if (currentVersion.yCoordPercentage < 80) {
//                 currentVersion.yCoordPercentage = currentVersion.yCoordPercentage + 12;
//             } else {
//                 currentVersion.yCoordPercentage = currentVersion.yCoordPercentage - 12;
//             }
//             const versions = [currentVersion];

//             const duplicateText = {
//                 id: duplicateTextId,
//                 currentVersionId: newVersionId,
//                 versions,
//             };

//             updatedVideoText.push({ ...duplicateText });
//         }
//     });

//     return updatedVideoText;
// }
