import React, {
    useContext,
} from 'react';

import {
    StyledText,
} from './styled';

import Context from '../../services/utilities/context';



const Text: React.FC<any> = () => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const {
        videoBoxDimensions,
    } = context;

    return (
        <StyledText
            style={{
                width: videoBoxDimensions.width + 'px',
                height: videoBoxDimensions.height + 'px',
                left: videoBoxDimensions.left + 'px',
                top: videoBoxDimensions.top + 'px',
            }}
        >
        </StyledText>
    );
}


export default Text;



// import {
//     StyledSelectVideo,
// } from './styled';

// import TextVideo from '../TextVideo';

// import {
//     getVersionById,
// } from '../../utils/textVideo';



// class SelectVideo extends Component<any, any> {
//     static contextType = Context;

//     public render() {
//         // console.log('RENDER SelectVideo');
//         const {
//             imageText,
//         } = this.context;
//         // console.log('imageText in SelectVideo', imageText);

//         let renderVideoText = (<></>);
//         if (typeof imageText === 'object' && imageText.length > 0) {
//             renderVideoText = imageText.map((text: any) => {
//                 const {
//                     currentVersionId,
//                     versions,
//                 } = text;

//                 const currentVersion = getVersionById(currentVersionId, versions);

//                 if (
//                     (videoTime >= currentVersion.startTime
//                     && videoTime <= currentVersion.endTime)
//                     || currentVersion.alwaysShow
//                 ) {
//                     return (
//                         <TextVideo
//                             key={currentVersionId}
//                             text={text}
//                         />
//                     );
//                 } else {
//                     return null;
//                 }
//             });
//         }

//         return (
//             <StyledSelectVideo
//                 style={{
//                     width: videoBoxWidth + 'px',
//                     height: videoBoxHeight + 'px',
//                     left: videoBoxLeft + 'px',
//                     top: videoBoxTop + 'px',
//                 }}
//             >
//                 {renderVideoText}
//             </StyledSelectVideo>
//         );
//     }
// }


// export default SelectVideo;
