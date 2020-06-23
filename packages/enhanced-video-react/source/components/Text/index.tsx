import React, {
    useContext,
    useState,
    useEffect,
} from 'react';

import {
    StyledText,
} from './styled';

import {
    VideoText,
} from '../../data/interfaces';

import Context from '../../services/context';

import Textarea from './components/Textarea';
import Textline from './components/Textline';

import {
    getVersionById,
} from '../../services/utilities/videoText';

import {
    valueIsBetween,
} from '../../services/utilities/number';



const Text: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const {
        videoTime,
        videoBoxDimensions,

        videoText,

        flipVertical,
        flipHorizontal,
    } = context;


    /** state */
    const [transform, setTransform] = useState('');


    /** effects */
    useEffect(() => {
        const transform = `${flipVertical ? 'scaleX(-1)': ''} ${flipHorizontal ? 'scaleY(-1' : ''}`;
        setTransform(transform);
    }, [
        flipVertical,
        flipHorizontal,
    ]);


    /** render */
    return (
        <StyledText
            style={{
                width: videoBoxDimensions.width + 'px',
                height: videoBoxDimensions.height + 'px',
                left: videoBoxDimensions.left + 'px',
                top: videoBoxDimensions.top + 'px',
                transform,
            }}
        >
            {videoText.map((textItem: VideoText) => {
                const currentVersion = getVersionById(textItem);

                if (!currentVersion) {
                    return;
                }

                const {
                    startTime,
                    endTime,
                    alwaysShow,
                } = currentVersion;

                /**
                 * FUTURE: to do some kind of caching here
                 * to check only for a subset of videoTexts which I know
                 * are near (+/- 20 seconds);
                 */
                const textInTimeframe = valueIsBetween(videoTime, startTime, endTime);

                if (textInTimeframe || alwaysShow) {
                    switch (currentVersion.type) {
                        case 'TEXTAREA':
                            return (
                                <Textarea
                                    key={textItem.id}
                                    data={textItem}
                                />
                            );
                        case 'TEXTLINE':
                            return (
                                <Textline
                                    key={textItem.id}
                                    data={textItem}
                                    currentVersion={currentVersion}
                                />
                            );
                        default:
                            return;
                    }
                }

                return
            })}
        </StyledText>
    );
}


export default Text;
