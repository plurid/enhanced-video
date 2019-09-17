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
    } = context;

    return (
        <StyledText>
        </StyledText>
    );
}


export default Text;



// import React, { Component } from 'react';

// import {
//     StyledSelectVideo,
// } from './styled';

// import Context from '../../context';

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
//             videoBoxWidth,
//             videoBoxHeight,
//             videoBoxLeft,
//             videoBoxTop,
//             videoTime,
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
