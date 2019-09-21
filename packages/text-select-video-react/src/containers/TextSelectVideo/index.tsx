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
    createNewText,
} from '../../data/constants/initializers';

import {
    TextSelectVideoProperties,
    IContext,
    VideoDimensions,
    VideoContainerDimensions,
    VideoBoxDimensions,
    VideoText,
    VideoTextVersionTextline,
} from '../../data/interfaces';

import Text from '../../components/Text';
import Settings from '../../components/Settings';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';

import TimescrollTime from '../../components/TimescrollTime';
import TimescrollText from '../../components/TimescrollText';

import themes, { Theme } from '@plurid/apps.utilities.themes';

import uuid from '../../services/utilities/uuid';

// test imports
import TEST_VIDEO_TEXT_DATA from '../../__spec-data__/data';



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

    const [editableText, setEditableText] = useState(false);

    const [loadedVideo, setLoadedVideo] = useState(false);

    const [videoDuration, setVideoDuration] = useState(0);
    const [videoTime, setVideoTime] = useState(0);

    const [videoDimensions, setVideoDimensions] = useState(initialVideoDimensions);
    const [videoContainerDimensions, setVideoContainerDimensions] = useState(initialVideoContainerDimensions);
    const [videoBoxDimensions, setVideoBoxDimensions] = useState(initialVideoBoxDimensions);

    const [videoPlaying, setVideoPlaying] = useState(false);

    const [previousVideoVolume, setPreviousVideoVolume] = useState(0);
    const [videoVolume, setVideoVolume] = useState(1);

    const [videoPlaybackRate, setVideoPlaybackRate] = useState(1);

    const [qualitySource, setQualitySource] = useState('');

    const [showTimescrollTime, setShowTimescrollTime] = useState(false);
    const [showTimescrollText, setShowTimescrollText] = useState(false);

    const [videoText, setVideoText] = useState<VideoText[]>([]);

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

    const toggleVideoVolume = () => {
        if (videoVolume === 0) {
            video.current!.volume = previousVideoVolume / 2;
            setVideoVolume(previousVideoVolume);
        } else {
            video.current!.volume = 0;
            setPreviousVideoVolume(videoVolume);
            setVideoVolume(0);
        }
    }

    const handleVideoVolume = (volume: number) => {
        video.current!.volume = videoVolume / 2;
        setVideoVolume(volume);
    }

    const handleVideoPlaybackRate = (videoPlaybackRate: number) => {
        video.current!.playbackRate = videoPlaybackRate;
        setVideoPlaybackRate(videoPlaybackRate)
    }

    const handleVideoCurrentTime = () => {
        const videoTime = video.current!.currentTime
        setVideoTime(videoTime);
    }

    const handleVideoTime = (videoTime: number) => {
        if (videoTime === videoDuration) {
            pauseVideo();
        }

        video.current!.currentTime = videoTime;
        setVideoTime(videoTime);
    }

    const selectQualitySource = () => {
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

    const addText = () => {
        const newText = createNewText(videoTime);
        const updatedTexts = [...videoText, newText];
        setVideoText(updatedTexts);
    }

    const saveText = async () => {
        setShowSpinner(true);
        setMessage('Saving the Video Text');
    }

    const getText = async () => {
        setShowSpinner(true);
        setMessage('Getting the Video Text');
    }

    useEffect(() => {
        computeVideoBoxDimensions();
    }, [videoDimensions]);

    useEffect(() => {
        video.current!.volume = videoVolume / 2;
        video.current!.playbackRate = videoPlaybackRate;
    }, [loadedVideo]);

    useEffect(() => {
        setVideoText([...TEST_VIDEO_TEXT_DATA]);
    }, []);

    const _theme: Theme = theme && themes[theme]
        ? themes[theme]
        : themes.plurid;
    const _controls = controls === undefined ? true : controls;

    const context: IContext = {
        src,
        type,

        theme: _theme,
        controls: _controls,
        height: height || 500,
        qualitySources,
        about: about === undefined ? true : about,

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

        editableText,
        setEditableText,

        loadedVideo,

        videoDuration,

        videoDimensions,
        videoContainerDimensions,
        videoBoxDimensions,

        videoPlaying,
        playVideo,
        pauseVideo,

        videoVolume,
        toggleVideoVolume,
        handleVideoVolume,

        videoPlaybackRate,
        handleVideoPlaybackRate,

        videoTime,
        handleVideoTime,

        qualitySource,
        setQualitySource,

        showTimescrollTime,
        setShowTimescrollTime,
        showTimescrollText,
        setShowTimescrollText,

        videoText,

        addText,
        saveText,
        getText,
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
                    onTimeUpdate={handleVideoCurrentTime}
                    onLoadedData={handleLoadedVideo}
                    onLoadedMetadata={handleLoadedMetadata}
                >
                    <source
                        src={src}
                        type={type}
                    />
                </video>

                {loadedVideo && (
                    <Text />
                )}

                {loadedVideo && _controls && showSettingsButton && (
                    <Settings />
                )}

                {showTimescrollTime && (
                    <TimescrollTime />
                )}

                {showTimescrollText && (
                    <TimescrollText />
                )}

                {message && (
                    <Message
                        text={message}
                    />
                )}

                {showSpinner && (
                    <Spinner />
                )}
            </StyledTextSelectVideo>
        </Context.Provider>
    );
}


export default TextSelectVideo;
