import React, {
    useRef,
    useState,
    useEffect,
    useReducer,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import './styles.css';
import {
    StyledEnhancedVideo,
    StyledEnhancedVideoNoRender,
} from './styled';

import {
    createNewText,
} from '../../data/constants/initializers';

import ACTIONS from '../../data/constants/actions';

import {
    PLURID_DOMAIN_API,
} from '../../data/constants/domains';

import {
    initialVideoDimensions,
    initialVideoContainerDimensions,
    initialVideoBoxDimensions,
} from '../../data/constants/video';

import {
    EnhancedVideoProperties,
    IContext,
    VideoDimensions,
    VideoContainerDimensions,
    VideoBoxDimensions,
    VideoText,
} from '../../data/interfaces';

import Video from '../../components/Video';
// import Settings from '../../components/Settings';

import Text from '../../components/Text';
import Settings from '../../components/Settings';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';

import TimescrollTime from '../../components/TimescrollTime';
import TimescrollText from '../../components/TimescrollText';

// import TextSelectVideo, {
//     ACTIONS,
// } from '@plurid/text-select-video-react';

import Context from '../../services/utilities/context';

// test imports
import TEST_VIDEO_TEXT_DATA from '../../__spec-data__/data';



const EnhancedVideo: React.FC<EnhancedVideoProperties> = (properties) => {
    /** Properties */
    const {
        src,
        type,

        theme,
        controls,
        height,
        qualitySources,
        about,
        loop,
        microview,

        apiEndpoint,
        apiKey,
        userToken,
        deviewVideoID,

        videoStyle,
        atLoad,

        action,
    } = properties;



    /** References */
    const videoContainer = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);



    /** State */
    const [showSpinner, setShowSpinner] = useState(false);
    const [message, setMessage] = useState('');

    const [showSettingsButton, setShowSettingsButton] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const [editableText, setEditableText] = useState(false);

    const [loadedVideo, setLoadedVideo] = useState(false);

    const [videoDuration, setVideoDuration] = useState(0);
    const [videoTime, setVideoTime] = useState(0);

    const [loopVideo, setLoopVideo] = useState(false);
    const [loopVideoStart, setLoopVideoStart] = useState(0);
    const [loopVideoEnd, setLoopVideoEnd] = useState(0);

    const [microviewVideo, setMicroviewVideo] = useState(false);
    const [microviewVideoStart, setMicroviewVideoStart] = useState(0);
    const [microviewVideoEnd, setMicroviewVideoEnd] = useState(0);

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

    const [invertValue, setInvertValue] = useState(0);
    const [contrastValue, setContrastValue] = useState(100);
    const [hueValue, setHueValue] = useState(0);
    const [saturationValue, setSaturationValue] = useState(100);
    const [brightnessValue, setBrightnessValue] = useState(100);



    /** Methods */
    const setMessageTimed = (message: string, time: number) => {
        setMessage(message);
        setTimeout(() => {
            setMessage('');
        }, time);
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

        if (
            loopVideo &&
            (videoTime < loopVideoStart || videoTime > loopVideoEnd)
        ) {
            video.current!.currentTime = loopVideoStart;
            setVideoTime(loopVideoStart);
        } else {
            setVideoTime(videoTime);
        }
    }

    const handleVideoTime = (videoTime: number) => {
        video.current!.currentTime = videoTime;
        setVideoTime(videoTime);
    }

    const handleVideoEnded = () => {
        if (videoTime === videoDuration) {
            if (
                loopVideo &&
                (loopVideoStart === 0 && loopVideoEnd === videoDuration)
            ) {
                video.current!.currentTime = 0;
                setVideoTime(0);
                playVideo();
                return;
            } else {
                pauseVideo();
            }
        }
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

        setLoopVideoEnd(videoDuration);
        setMicroviewVideoEnd(videoDuration);
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
        // console.log('videoDimensions', videoDimensions);

        const videoContainerWidth = videoContainer.current!.offsetWidth;
        const videoContainerHeight = videoContainer.current!.offsetHeight;
        // console.log(videoContainerWidth, videoContainerHeight);

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
        // console.log(videoContainerDimensions);
        setVideoContainerDimensions(videoContainerDimensions);

        const videoBoxDimensions: VideoBoxDimensions = {
            width: videoBoxWidth,
            height: videoBoxHeight,
            left: videoBoxLeft,
            top: videoBoxTop,
        };
        // console.log(videoBoxDimensions);
        setVideoBoxDimensions(videoBoxDimensions);
    }

    const addText = () => {
        setMessageTimed('Added New Text', 1500);

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

    const handleWindowResize = () => {
        computeVideoBoxDimensions();
    }

    const handleKeys = (event: any) => {
        event.preventDefault();

        // handle space
        if (event.keyCode === 32) {
            if (videoPlaying) {
                setMessageTimed('Pause', 1000);
                pauseVideo();
            } else {
                setMessageTimed('Play', 1000);
                playVideo();
            }
        }

        if (event.key === 'ArrowLeft') {
            const newTime = videoTime - 5;
            if (newTime > 0) {
                handleVideoTime(newTime);
            } else {
                handleVideoTime(0);
            }
        }

        if (event.key === 'ArrowRight') {
            const newTime = videoTime + 5;
            if (newTime < videoDuration) {
                handleVideoTime(newTime);
            } else {
                handleVideoTime(videoDuration);
            }
        }

        if (event.key === 'ArrowUp') {
            const newVolume = videoVolume + 0.1;
            if (newVolume < 2) {
                handleVideoVolume(newVolume);
            } else {
                handleVideoVolume(2);
            }
        }

        if (event.key === 'ArrowDown') {
            const newVolume = videoVolume - 0.1;
            if (newVolume > 0) {
                handleVideoVolume(newVolume);
            } else {
                handleVideoVolume(0);
            }
        }

        if (event.key === 'm') {
            if (videoVolume === 0) {
                setMessageTimed(`Volume`, 1000);
            } else {
                setMessageTimed(`Muted`, 1000);
            }
            toggleVideoVolume();
        }

        if (event.key === 't') {
            setShowTimescrollTime(show => !show);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        videoContainer.current!.addEventListener('keydown', handleKeys);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            videoContainer.current!.removeEventListener('keydown', handleKeys);
        }
    }, [
        videoDimensions,
        videoPlaying,
        videoVolume,
        videoTime,
    ]);

    const reducer = (state: any, action: any) => {
        switch(action.type) {
            case ACTIONS.ADD_TEXT:
                addText();
                return state;
            case ACTIONS.SAVE_TEXT:
                saveText();
                return state;
            case ACTIONS.GET_TEXT:
                getText();
                return state;
            case ACTIONS.SET_MESSAGE:
                setMessage(action.payload);
                return state;
        }
    };
    const [_, dispatch] = useReducer(reducer, {});
    useEffect(() => {
        if (action) {
            dispatch(action);
        }
    }, [action]);

    const _theme: Theme = theme && themes[theme]
        ? themes[theme]
        : themes.plurid;
    const _controls = controls === undefined ? true : controls;



    /** Context */
    const context: IContext = {
        src,
        type,

        theme: _theme,
        controls: _controls,
        height: height || 500,
        qualitySources,
        about: about === undefined ? true : about,
        loop: loop === undefined ? false : loop,
        microview: microview === undefined ? false : microview,

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

        loopVideo,
        setLoopVideo,
        loopVideoStart,
        setLoopVideoStart,
        loopVideoEnd,
        setLoopVideoEnd,

        microviewVideo,
        setMicroviewVideo,
        microviewVideoStart,
        setMicroviewVideoStart,
        microviewVideoEnd,
        setMicroviewVideoEnd,

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



    /** Markup */
    if (!src || !type) {
        return (
            <StyledEnhancedVideoNoRender>
                add the src and type properties to display the video
            </StyledEnhancedVideoNoRender>
        );
    }

    return (
        <Context.Provider
            value={context}
        >
            <StyledEnhancedVideo
                theme={_theme}
                tabIndex={0}
                onMouseEnter={() => setShowSettingsButton(true)}
                onMouseLeave={() => setShowSettingsButton(false)}
                onMouseMove={() => !showSettingsButton ? setShowSettingsButton(true) : null}
                ref={videoContainer}
            >
                {/* <Video
                    src={src}
                    type={type}
                    height={height}
                    videoRef={video}
                /> */}

                    <video
                        height={height}
                        style={videoStyle ? {...videoStyle} : {}}
                        ref={video}
                        onTimeUpdate={handleVideoCurrentTime}
                        onLoadedData={handleLoadedVideo}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={handleVideoEnded}
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
            </StyledEnhancedVideo>
        </Context.Provider>


        // <StyledEnhancedVideo
        //     ref={videoContainer}
        // >
        //     {/* <TextSelectVideo
        //         src={src}
        //         type={type}
        //         theme={_theme as ThemeTypes}
        //         controls={false}
        //         height={height || 500}
        //         videoStyle={{
        //             filter: `
        //                 invert(${invertValue})
        //                 contrast(${contrastValue}%)
        //                 hue-rotate(${hueValue}deg)
        //                 saturate(${saturationValue}%)
        //                 brightness(${brightnessValue}%)
        //             `,
        //         }}
        //         action={textSelectAction}
        //     /> */}

        //     {/* {loadedVideo && _controls && showSettingsButton && (
        //         <Settings />
        //     )} */}
        // </StyledEnhancedVideo>
    );
}


export default EnhancedVideo;
