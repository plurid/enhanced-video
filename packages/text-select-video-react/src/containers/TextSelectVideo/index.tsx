import React, {
    useState,
    useContext,
} from 'react';

import './styles.css';
import {
    StyledTextSelectVideo,
    StyledTextSelectVideoNoRender,
} from './styled';

import Context from '../../services/utilities/context';

import {
    PLURID_DOMAIN_API,
} from '../../data/constants/domains';

import {
    TextSelectVideoProperties,
    IContext,
} from '../../data/interfaces';

import Message from '../../components/Message';
import Spinner from '../../components/Spinner';



const TextSelectVideo: React.FC<TextSelectVideoProperties> = (properties) => {
    const {
        src,
        type,

        theme,
        controls,
        height,
        qualitySources,
        about,

        apiEndpoint,
        apiKey,
        userToken,
        deviewVideoID,

        videoStyle,
    } = properties;

    const [showSpinner, setShowSpinner] = useState(false);
    const [message, setMessage] = useState('');

    const setMessageTimed = (message: string, time: number) => {
        setMessage(message);
        setTimeout(() => {
            setMessage('');
        }, time);
    }

    if (!src || !type) {
        return (
            <StyledTextSelectVideoNoRender>
                add the src and type properties to display the video
            </StyledTextSelectVideoNoRender>
        );
    }

    const context: IContext = {
        src,
        type,

        theme: theme || 'plurid',
        controls: controls || true,
        height: height || 500,
        qualitySources,
        about: about || true,

        apiEndpoint: apiEndpoint || PLURID_DOMAIN_API,
        apiKey,
        userToken,
        deviewVideoID,

        setMessage,
        setMessageTimed,
        setShowSpinner,
    };

    return (
        <Context.Provider
            value={context}
        >
            <StyledTextSelectVideo>
                <video
                    height={height}
                    style={videoStyle ? {...videoStyle} : {}}
                    // ref={video}
                    // onTimeUpdate={this.setVideoCurrentTime}
                    // onLoadedData={this.handleLoadedVideo}
                    // onLoadedMetadata={this.handleLoadedMetadata}
                >
                        <source
                            src={src + "#t=230"}
                            // src={src}
                            type={type}
                        />
                </video>

                {message && (
                    <Message text={message} />
                )}

                {showSpinner && (
                    <Spinner />
                )}
            </StyledTextSelectVideo>
        </Context.Provider>
    );
}


export default TextSelectVideo;
