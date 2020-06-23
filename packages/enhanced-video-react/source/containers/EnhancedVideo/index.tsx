import React, {
    useRef,
    useState,
    useEffect,
    useReducer,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    uuid,
} from '@plurid/plurid-functions';

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
    COLOR_VALUES_DEFAULTS,
    initialPreviousVideoColors,
} from '../../data/constants/colors';

import {
    PLURID_DOMAIN_API,
    ABOUT_URL,
} from '../../data/constants/domains';

import {
    initialVideoDimensions,
    initialVideoContainerDimensions,
    initialVideoBoxDimensions,
} from '../../data/constants/video';

import {
    getVersionById,
    updateVersion,
} from '../../services/utilities/videoText';

import {
    EnhancedVideoProperties,
    IContext,
    VideoDimensions,
    VideoContainerDimensions,
    VideoBoxDimensions,
    VideoText,
    LegacyToolbarControls,
} from '../../data/interfaces';

import Video from '../../components/Video';
// import Settings from '../../components/Settings';

import Cover from '../../components/Cover';
import CoverPlay from '../../components/CoverPlay';

import Text from '../../components/Text';
import Settings from '../../components/Settings';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';

import TimescrollTime from '../../components/TimescrollTime';
import TimescrollText from '../../components/TimescrollText';

// import TextSelectVideo, {
//     ACTIONS,
// } from '@plurid/text-select-video-react';

import LegacyMask from '../Masks/Legacy';
import PluridMask from '../Masks/Plurid';

import Context from '../../services/context';

// // test imports
// import TEST_VIDEO_TEXT_DATA from '../../__spec-data__/data';



const EnhancedVideo: React.FC<EnhancedVideoProperties> = (
    properties,
) => {
    /** properties */
    const {
        src,
        type,

        generator: generatorProperty,
        development: developmentProperty,
        silent: silentProperty,

        settingsDrawers: settingsDrawersProperty,
        textDrawer: textDrawerProperty,
        variaDrawer: variaDrawerProperty,

        mask: maskProperty,
        cover,
        CoverPlay: CoverPlayProperty,

        accent,
        legacyToolbarControls: legacyToolbarControlsProperty,

        initialColors,

        theme: themeProperty,
        controls: controlsProperty,
        height: heightProperty,
        qualitySources,
        about: aboutProperty,
        loop: loopProperty,
        microview: microviewProperty,

        apiEndpoint: apiEndpointProperty,
        apiKey,
        userToken,
        videoID,

        videoStyle,
        atLoad,

        action,
    } = properties;

    const mask = maskProperty ?? 'plurid';
    const legacyToolbarControls: LegacyToolbarControls[] = legacyToolbarControlsProperty || ['ALL'];

    const generator = generatorProperty ?? false;
    const development = developmentProperty ?? false;
    const silent = silentProperty ?? false;

    const settingsDrawers = settingsDrawersProperty || ['ALL'];
    const textDrawer = textDrawerProperty || ['ALL'];
    const variaDrawer = variaDrawerProperty || ['ALL'];

    const theme: Theme = themeProperty && themes[themeProperty]
        ? themes[themeProperty]
        : themes.plurid;
    const controls = controlsProperty ?? true;
    const height = heightProperty || 500;
    const about = aboutProperty ?? true;
    const loop = loopProperty ?? false;
    const microview = microviewProperty ?? false;

    const apiEndpoint = apiEndpointProperty || PLURID_DOMAIN_API;



    /** references */
    const videoContainer = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);



    /** state */
    const [mouseOver, setMouseOver] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);
    const [message, setMessage] = useState('');

    const [showSettingsButton, setShowSettingsButton] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const [editableText, setEditableText] = useState(false);
    const [revealedText, setRevealedText] = useState(false);

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

    const [expandTextDrawer, setExpandTextDrawer] = useState(false);
    const [expandColorDrawer, setExpandColorDrawer] = useState(false);
    const [expandTopologyDrawer, setExpandTopologyDrawer] = useState(false);
    const [expandVariaDrawer, setExpandVariaDrawer] = useState(false);

    const [defaultColorsToggled, setDefaultColorsToggled] = useState(false);

    const [deletedTexts, setDeletedTexts] = useState<string[]>([]);

    const [videoColorsInvert, setVideoColorsInvert] = useState(!!initialColors?.invert || !!COLOR_VALUES_DEFAULTS.Invert);
    const [videoColorsContrast, setVideoColorsContrast] = useState(initialColors?.contrast || COLOR_VALUES_DEFAULTS.Contrast);
    const [videoColorsHue, setVideoColorsHue] = useState(initialColors?.hue || COLOR_VALUES_DEFAULTS.Hue);
    const [videoColorsSaturation, setVideoColorsSaturation] = useState(initialColors?.saturation || COLOR_VALUES_DEFAULTS.Saturation);
    const [videoColorsBrightness, setVideoColorsBrightness] = useState(initialColors?.brightness || COLOR_VALUES_DEFAULTS.Brightness);

    const [previousVideoColors, setPreviousVideoColors] = useState(initialPreviousVideoColors);

    const [flipVertical, setFlipVertical] = useState(false);
    const [flipHorizontal, setFlipHorizontal] = useState(false);

    const [databaseVideoID, setDatabaseVideoID] = useState('');


    /** handlers */
    const setMessageTimed = (
        message: string,
        time: number,
    ) => {
        setMessage(message);
        setTimeout(() => {
            setMessage('');
        }, time);
    }


    /** VIDEO */
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

    const handleVideoVolume = (
        volume: number,
    ) => {
        video.current!.volume = videoVolume / 2;
        setVideoVolume(volume);
    }

    const handleVideoPlaybackRate = (
        videoPlaybackRate: number,
    ) => {
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

    const handleVideoTime = (
        videoTime: number,
    ) => {
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

    const handleLoadedVideo = async (
        video: any,
    ) => {
        if (atLoad) {
            await atLoad(video);
        }

        setLoadedVideo(true);

        const videoDuration = video.target.duration;
        setVideoDuration(videoDuration);

        setLoopVideoEnd(videoDuration);
        setMicroviewVideoEnd(videoDuration);
    }

    const handleLoadedMetadata = (
        video: any,
    ) => {
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


    /** TEXT */
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

    const updateTextCoordinates = (
        versionID: string,
        coordinates: any,
    ) => {
        const updatedVideoText = videoText.map(text => {
            if (text.id === versionID) {
                const currentVersion = getVersionById(text);
                if (currentVersion) {
                    const updatedVersion = { ...currentVersion };
                    updatedVersion.xPercent = coordinates.x;
                    updatedVersion.yPercent = coordinates.y;
                    const updatedText = updateVersion(text, updatedVersion);
                    return { ...updatedText };
                }

                return { ...text };
            }

            return { ...text };
        });

        setVideoText([...updatedVideoText]);
    }

    const updateTextItemField = (
        versionID: string,
        type: string,
        value: number | string | boolean,
    ) => {
        const updatedVideoText = videoText.map(text => {
            if (text.id === versionID) {
                const currentVersion = getVersionById(text);
                if (currentVersion) {
                    const updatedVersion = { ...currentVersion };
                    (updatedVersion as any)[type] = value;
                    const updatedText = updateVersion(text, updatedVersion);
                    return { ...updatedText };
                }

                return { ...text };
            }

            return { ...text };
        });

        setVideoText([...updatedVideoText]);
    }

    const updateVersionContent = (
        versionID: string,
        value: string,
    ) => {
        const updatedVideoText = videoText.map(text => {
            if (text.id === versionID) {
                const currentVersion = getVersionById(text);
                if (currentVersion) {
                    const updatedVersion = { ...currentVersion };
                    updatedVersion.content = value;
                    const updatedText = updateVersion(text, updatedVersion);
                    return { ...updatedText };
                }

                return { ...text };
            }

            return { ...text };
        });

        setVideoText([...updatedVideoText]);
    }

    const toggleVersionViewable = (
        versionID: string,
    ) => {
        const updatedVideoText = videoText.map(text => {
            if (text.id === versionID) {
                const currentVersion = getVersionById(text);
                if (currentVersion) {
                    const updatedVersion = { ...currentVersion };
                    updatedVersion.viewable = !currentVersion.viewable;
                    const updatedText = updateVersion(text, updatedVersion);
                    return updatedText;
                }
            }

            return text;
        });

        setVideoText(updatedVideoText);
    }

    const duplicateTextItem = (
        versionID: string,
    ) => {
        const imgText = videoText.find(imgText => imgText.id === versionID);

        if (imgText) {
            const currentVersion = getVersionById(imgText);
            if (currentVersion) {
                const version = { ...currentVersion };
                const currentVersionId = uuid.generate();
                version.id = currentVersionId;
                version.yPercent = currentVersion.yPercent < 85
                    ? currentVersion.yPercent + 10
                    : currentVersion.yPercent - 10;

                const id = uuid.generate();
                const updatedImgText: VideoText = {
                    id,
                    currentVersionId,
                    versions: [version],
                };

                const updatedVideoText = [...videoText, updatedImgText];
                setVideoText(updatedVideoText);
            }
        }
    }

    const deleteTextItem = (
        textID: string,
    ) => {
        const updatedVideoText = videoText.filter(text => {
            if (text.id === textID) {
                setDeletedTexts(deletedTexts => [...deletedTexts, textID]);
                return false;
            }

            return text;
        });

        setVideoText(updatedVideoText);
    }

    const downloadText = () => {
        const stringifiedText = JSON.stringify(videoText, null, 4);

        const videoName = videoID || databaseVideoID || 'eit-' + src;
        const filename = videoName + '.json';

        const element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + encodeURIComponent(stringifiedText),
        );
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    /** COLORS */
    const toggleDefaultColors = () => {
        if (defaultColorsToggled) {
            setVideoColorsInvert(!!previousVideoColors.invert);
            setVideoColorsContrast(previousVideoColors.contrast);
            setVideoColorsHue(previousVideoColors.hue);
            setVideoColorsSaturation(previousVideoColors.saturation);
            setVideoColorsBrightness(previousVideoColors.brightness);

            setDefaultColorsToggled(false);
        } else {
            const previousColorValues = {
                invert: videoColorsInvert ? 1 : 0,
                contrast: videoColorsContrast,
                hue: videoColorsHue,
                saturation: videoColorsSaturation,
                brightness: videoColorsBrightness,
            };

            setPreviousVideoColors(previousColorValues);
            resetToDefaultColors();
            setDefaultColorsToggled(true);
        }
    }

    const resetToDefaultColors = () => {
        setVideoColorsInvert(!!COLOR_VALUES_DEFAULTS.Invert);
        setVideoColorsContrast(COLOR_VALUES_DEFAULTS.Contrast);
        setVideoColorsHue(COLOR_VALUES_DEFAULTS.Hue);
        setVideoColorsSaturation(COLOR_VALUES_DEFAULTS.Saturation);
        setVideoColorsBrightness(COLOR_VALUES_DEFAULTS.Brightness);

        if (defaultColorsToggled) {
            setDefaultColorsToggled(false);
        }
    }


    /** VARIA */
    const toggleFullscreen = () => {
        if (videoContainer.current) {
            if (document.fullscreen) {
                document.exitFullscreen();
                return;
            }

            videoContainer.current.requestFullscreen();
        }
    }

    const viewAbout = () => {
        window.open(ABOUT_URL, '_blank');
    }



    /** effects */
    useEffect(() => {
        computeVideoBoxDimensions();
    }, [videoDimensions]);

    useEffect(() => {
        video.current!.volume = videoVolume / 2;
        video.current!.playbackRate = videoPlaybackRate;
    }, [loadedVideo]);

    // useEffect(() => {
    //     setVideoText([...TEST_VIDEO_TEXT_DATA]);
    // }, []);

    const handleWindowResize = () => {
        computeVideoBoxDimensions();
    }

    const handleKeys = (
        event: any,
    ) => {
        if (editableText) {
            return;
        }

        let handled = false;

        // handle space
        if (event.keyCode === 32) {
            handled = true;
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
            handled = true;
            if (newTime > 0) {
                handleVideoTime(newTime);
            } else {
                handleVideoTime(0);
            }
        }

        if (event.key === 'ArrowRight') {
            const newTime = videoTime + 5;
            handled = true;
            if (newTime < videoDuration) {
                handleVideoTime(newTime);
            } else {
                handleVideoTime(videoDuration);
            }
        }

        if (event.key === 'ArrowUp') {
            const newVolume = videoVolume + 0.1;
            handled = true;
            if (newVolume < 2) {
                handleVideoVolume(newVolume);
            } else {
                handleVideoVolume(2);
            }
        }

        if (event.key === 'ArrowDown') {
            const newVolume = videoVolume - 0.1;
            handled = true;
            if (newVolume > 0) {
                handleVideoVolume(newVolume);
            } else {
                handleVideoVolume(0);
            }
        }

        if (event.key === 'm') {
            handled = true;
            if (videoVolume === 0) {
                setMessageTimed(`Volume`, 1000);
            } else {
                setMessageTimed(`Muted`, 1000);
            }
            toggleVideoVolume();
        }

        if (event.key === 't') {
            handled = true;
            setShowTimescrollTime(show => !show);
        }

        if (handled) {
            event.preventDefault();
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
        editableText,
        videoDimensions,
        videoPlaying,
        videoVolume,
        videoTime,
    ]);

    const reducer = (
        state: any,
        action: any,
    ) => {
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
            case ACTIONS.PLAY:
                playVideo();
                return state;
            case ACTIONS.PAUSE:
                pauseVideo();
                return state;
            case ACTIONS.TIME:
                handleVideoTime(action.payload);
                return state;
            case ACTIONS.MUTE:
                toggleVideoVolume();
                return state;
            case ACTIONS.VOLUME:
                handleVideoVolume(action.payload);
                return state;
        }
    };
    const [_, dispatch] = useReducer(reducer, {});
    useEffect(() => {
        if (action) {
            dispatch(action);
        }
    }, [action]);

    /** Handle toggled colors default */
    useEffect(() => {
        if (defaultColorsToggled) {
            if (
                videoColorsInvert !== false
                || videoColorsContrast !== COLOR_VALUES_DEFAULTS.Contrast
                || videoColorsHue !== COLOR_VALUES_DEFAULTS.Hue
                || videoColorsSaturation !== COLOR_VALUES_DEFAULTS.Saturation
                || videoColorsBrightness !== COLOR_VALUES_DEFAULTS.Brightness
            ) {
                setDefaultColorsToggled(false);
            }
        }
    }, [
        videoColorsInvert,
        videoColorsContrast,
        videoColorsHue,
        videoColorsSaturation,
        videoColorsBrightness,
    ]);



    /** context */
    const context: IContext = {
        src,
        type,

        theme,
        controls,
        height,
        qualitySources,
        about,
        loop,
        microview,
        accent,
        legacyToolbarControls,

        generator,
        development,
        silent,

        settingsDrawers,
        textDrawer,
        variaDrawer,

        cover,
        CoverPlay: CoverPlayProperty || CoverPlay,

        apiEndpoint,
        apiKey,
        userToken,
        videoID,

        mouseOver,

        toggleFullscreen,
        viewAbout,

        setMessage,
        setMessageTimed,
        setShowSpinner,

        showSettingsButton,
        setShowSettingsButton,

        showSettingsMenu,
        setShowSettingsMenu,

        editableText,
        setEditableText,
        revealedText,
        setRevealedText,

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

        updateTextCoordinates,
        updateTextItemField,
        updateVersionContent,
        toggleVersionViewable,
        duplicateTextItem,
        deleteTextItem,
        downloadText,

        defaultColorsToggled,
        toggleDefaultColors,
        resetToDefaultColors,

        videoColorsInvert,
        setVideoColorsInvert,
        videoColorsContrast,
        setVideoColorsContrast,
        videoColorsHue,
        setVideoColorsHue,
        videoColorsSaturation,
        setVideoColorsSaturation,
        videoColorsBrightness,
        setVideoColorsBrightness,

        flipVertical,
        setFlipVertical,
        flipHorizontal,
        setFlipHorizontal,

        expandTextDrawer,
        setExpandTextDrawer,
        expandColorDrawer,
        setExpandColorDrawer,
        expandTopologyDrawer,
        setExpandTopologyDrawer,
        expandVariaDrawer,
        setExpandVariaDrawer,
    };



    /** render */
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
                theme={theme}
                tabIndex={0}
                onMouseEnter={() => {
                    setMouseOver(true);
                    setShowSettingsButton(true);
                }}
                onMouseLeave={() => {
                    setMouseOver(false);
                    setShowSettingsButton(false)
                }}
                onMouseMove={() => !showSettingsButton ? setShowSettingsButton(true) : null}
                ref={videoContainer}
            >
                <Video
                    src={src}
                    type={type}

                    videoRef={video}

                    height={height}
                    videoStyle={videoStyle}

                    atTimeUpdate={handleVideoCurrentTime}
                    atLoadedData={handleLoadedVideo}
                    atLoadedMetadata={handleLoadedMetadata}
                    atEnded={handleVideoEnded}
                />

                <Cover />

                {loadedVideo && (
                    <Text />
                )}

                {mask === 'legacy' && (
                    <LegacyMask />
                )}

                {mask === 'plurid' && (
                    <PluridMask />
                )}

                {/* {loadedVideo && _controls && showSettingsButton && (
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
                )} */}
            </StyledEnhancedVideo>
        </Context.Provider>
    );
}


export default EnhancedVideo;
