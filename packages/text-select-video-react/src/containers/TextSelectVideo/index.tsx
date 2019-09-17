import React, {
    useState,
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

import Text from '../../components/Text';
import Settings from '../../components/Settings';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';

import themes, { Theme } from '@plurid/apps.utilities.themes';



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
    const [showSettingsButton, setShowSettingsButton] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

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

    const selectedTheme: Theme = theme && themes[theme]
        ? themes[theme]
        : themes.plurid;

    const context: IContext = {
        src,
        type,

        theme: selectedTheme,
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

        showSettingsButton,
        setShowSettingsButton,

        showSettingsMenu,
        setShowSettingsMenu,
    };

    return (
        <Context.Provider
            value={context}
        >
            <StyledTextSelectVideo
                onMouseEnter={() => setShowSettingsButton(true)}
                onMouseLeave={() => setShowSettingsButton(false)}
                onMouseMove={() => !showSettingsButton ? setShowSettingsButton(true) : null}
            >
                <video
                    height={height}
                    style={videoStyle ? {...videoStyle} : {}}
                    // ref={video}
                    // onTimeUpdate={this.setVideoCurrentTime}
                    // onLoadedData={this.handleLoadedVideo}
                    // onLoadedMetadata={this.handleLoadedMetadata}
                >
                        <source
                            src={src + "#t=260"}
                            // src={src}
                            type={type}
                        />
                </video>

                <Text />

                {showSettingsButton && (
                    <Settings />
                )}

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
