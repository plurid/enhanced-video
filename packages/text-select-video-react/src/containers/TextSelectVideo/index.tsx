import React, {
    useState,
    useEffect,
    useRef,
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
    initialVideoDimensions,
    initialVideoContainerDimensions,
    initialVideoBoxDimensions,
} from '../../data/constants/video';

import {
    TextSelectVideoProperties,
    IContext,
    VideoDimensions,
    VideoContainerDimensions,
    VideoBoxDimensions,
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
        atLoad,
    } = properties;

    const [showSpinner, setShowSpinner] = useState(false);
    const [message, setMessage] = useState('');
    const [showSettingsButton, setShowSettingsButton] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const [loadedVideo, setLoadedVideo] = useState(false);
    const [videoDuration, setVideoDuration] = useState(0);
    const [videoDimensions, setVideoDimensions] = useState(initialVideoDimensions);
    const [videoContainerDimensions, setVideoContainerDimensions] = useState(initialVideoContainerDimensions);
    const [videoBoxDimensions, setVideoBoxDimensions] = useState(initialVideoBoxDimensions);

    const [videoPlaying, setVideoPlaying] = useState(false);

    const videoContainer = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);

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

    const playVideo = () => {
        video.current!.play();
        setVideoPlaying(true);
    }

    const pauseVideo = () => {
        video.current!.pause();
        setVideoPlaying(false);
    }

    const handleLoadedVideo = async (video: any) => {
        if (atLoad) {
            await atLoad(video);
        }

        setLoadedVideo(true);

        const videoDuration = video.target.duration;
        setVideoDuration(videoDuration);
    }

    const handleLoadedMetadata = (video: any) => {
        if (video.target) {
            const width = video.target.videoWidth;
            const height = video.target.videoHeight;
            const ratio = width / height;

            const videoDimensions: VideoDimensions = {
                width,
                height,
                ratio,
            };

            setVideoDimensions(videoDimensions);
        }
    }

    const computeVideoBoxDimensions = () => {
        const {
            height: videoHeight,
            ratio: videoRatio,
        } = videoDimensions;

        const videoContainerWidth = videoContainer.current!.offsetWidth;
        const videoContainerHeight = videoContainer.current!.offsetHeight;
        // // console.log(videoContainerWidth, videoContainerHeight);

        let videoBoxWidth = 0;
        let videoBoxHeight = 0;
        if (videoHeight > videoContainerHeight) {
            videoBoxWidth = videoContainerWidth;
            videoBoxHeight = videoContainerWidth / videoRatio;
        }

        if (videoBoxHeight > videoContainerHeight) {
            videoBoxWidth = videoContainerHeight * videoRatio;
            videoBoxHeight = videoContainerHeight;
        }

        const videoBoxLeft = (videoContainerWidth - videoBoxWidth) / 2;
        const videoBoxTop = (videoContainerHeight - videoBoxHeight) / 2;
        // console.log(videoBoxWidth, videoBoxHeight);
        // console.log(videoBoxLeft, videoBoxTop);

        const videoContainerDimensions: VideoContainerDimensions = {
            width: videoContainerWidth,
            height: videoContainerHeight,
        };
        setVideoContainerDimensions(videoContainerDimensions);

        const videoBoxDimensions: VideoBoxDimensions = {
            width: videoBoxWidth,
            height: videoBoxHeight,
            left: videoBoxLeft,
            top: videoBoxTop,
        };
        setVideoBoxDimensions(videoBoxDimensions);
    }

    useEffect(() => {
        computeVideoBoxDimensions();
    }, [videoDimensions])

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

        loadedVideo,
        videoDuration,
        videoDimensions,
        videoContainerDimensions,
        videoBoxDimensions,

        videoPlaying,
        playVideo,
        pauseVideo,
    };

    return (
        <Context.Provider
            value={context}
        >
            <StyledTextSelectVideo
                onMouseEnter={() => setShowSettingsButton(true)}
                onMouseLeave={() => setShowSettingsButton(false)}
                onMouseMove={() => !showSettingsButton ? setShowSettingsButton(true) : null}
                ref={videoContainer}
            >
                <video
                    height={height}
                    style={videoStyle ? {...videoStyle} : {}}
                    ref={video}
                    // onTimeUpdate={this.setVideoCurrentTime}
                    onLoadedData={handleLoadedVideo}
                    onLoadedMetadata={handleLoadedMetadata}
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
