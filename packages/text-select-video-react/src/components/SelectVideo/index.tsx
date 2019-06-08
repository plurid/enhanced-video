import React, { Component } from 'react';

import { StyledSelectVideo } from './styled';

import Context from '../../context';

import TextVideo from '../TextVideo';



class SelectVideo extends Component<any, any> {
    static contextType = Context;

    public render() {
        // console.log('RENDER SelectVideo');
        const {
            imageText,
            videoBoxWidth,
            videoBoxHeight,
            videoBoxLeft,
            videoBoxTop,
        } = this.context;
        // console.log('imageText in SelectVideo', imageText);

        let renderVideoText = (<></>);
        if (typeof imageText === 'object' && imageText.length > 0) {
            renderVideoText = imageText.map((text: any) => {
                return (
                    <TextVideo
                        key={text.currentVersionId}
                        text={text}
                    />
                );
            });
        }

        return (
            <StyledSelectVideo
                style={{
                    width: videoBoxWidth + 'px',
                    height: videoBoxHeight + 'px',
                    left: videoBoxLeft + 'px',
                    top: videoBoxTop + 'px',
                }}
            >
                {renderVideoText}
            </StyledSelectVideo>
        );
    }
}


export default SelectVideo;
