import React, { Component } from 'react';
import Context from '../../context';
import SelectVideo from '../SelectVideo';
import Settings from '../Settings';
import Spinner from '../Spinner';
import Message from '../Message';
import TimescrollView from '../TimescrollView';

import {
    ITextSelectVideoProps,
    ITextSelectVideoState,
} from './interfaces';
import { StyledTextSelectVideo } from './styled';

import {
    UPDATE_DEBOUNCE,
    PLURID_API,
    CONTENT_MORE_LIMIT,
} from '../../data/constants';
import {
    emptyVideoText,
    emptyTextSelectVideo,
    newTextVideoVersion,
} from '../../data/initializers';
import themes from '../../data/themes';

import uuidv4 from '../../utils/uuid';
import computeVideoSha from '../../utils/computeVideoSha';
import {
    getVersionById,
    updateVersion,
    pushNewVersion,
    duplicateTextVideo,
} from '../../utils/textVideo';

import { ApolloClient } from 'apollo-client';
import graphqlClient from '../../graphql/client';
import {
    getTextSelectVideo,
    extractTextSelectVideo,
} from '../../graphql/query';
import {
    updateTextSelectVideo,
} from '../../graphql/mutate';



class TextSelectVideo extends Component<
    ITextSelectVideoProps, ITextSelectVideoState
> {
    static contextType = Context;

    private client: ApolloClient<any>;
    private extractInterval: number;
    private video = React.createRef<HTMLVideoElement>();
    private videoContainer = React.createRef<HTMLDivElement>();

    public state: ITextSelectVideoState;

    constructor(props: ITextSelectVideoProps) {
        super(props);

        // console.log('CONSTRUCTOR');
        const apiEndpoint = this.props.apiEndpoint || PLURID_API;
        const updateDebounce = this.props.updateDebounce || UPDATE_DEBOUNCE;
        this.client = graphqlClient(apiEndpoint);

        const qualitySources = this.makeQualitySources(this.props.qualitySources);

        this.state = {
            loading: false,

            videoWidth: 0,
            videoHeight: 0,
            videoRatio: 0,

            videoContainerWidth: 0,
            videoContainerHeight: 0,

            videoBoxWidth: 0,
            videoBoxHeight: 0,
            videoBoxLeft: 0,
            videoBoxTop: 0,

            previousVideoVolume: 0.75,
            videoVolume: 0.75,
            videoPlaybackRate: 1,
            videoTime: 0,
            videoDuration: 0,
            videoPlaying: false,
            videoLoaded: true,
            imageSha: '',
            imageHeight: 0,
            imageWidth: 0,
            imageNaturalHeight: 0,
            imageNaturalWidth: 0,
            imageText: emptyVideoText,
            message: '',

            timescrollView: false,
            textTimescrollView: false,

            apiEndpoint,
            updateDebounce,

            qualitySources: qualitySources,
            selectedQualitySource: qualitySources ? qualitySources.length - 1 : 0,
            selectedQualitySourceSrc: '',

            toggleSettingsButton: this.toggleSettingsButton,
            toggledSettingsButton: false,
            toggleSettings: this.toggleSettings,
            toggledSettings: false,
            toggleEditable: this.toggleEditable,
            toggledEditable: false,

            createTextVideo: this.createTextVideo,
            duplicateTextVideo: this.duplicateTextVideo,
            updateTextVideo: this.updateTextVideo,
            updateTextVideoField: this.updateTextVideoField,
            updateTextVideoBatch: this.updateTextVideoBatch,
            deleteTextVideo: this.deleteTextVideo,

            editorWidth: 0,
            setEditorWidth: this.setEditorWidth,

            getText: this.getText,
            getAndSetText: this.getAndSetText,
            extractText: this.extractText,
            saveVideoText: this.saveVideoText,

            contentMoreLimit: this.props.moreLimit || CONTENT_MORE_LIMIT,

            playVideo: this.playVideo,
            pauseVideo: this.pauseVideo,
            setVideoTime: this.setVideoTime,
            setVideoVolume: this.setVideoVolume,
            setVideoPlaybackRate: this.setVideoPlaybackRate,

            toggleTimescrollView: this.toggleTimescrollView,
            toggleTextTimescrollView: this.toggleTextTimescrollView,
            toggleVideoVolume: this.toggleVideoVolume,

            selectQualitySource: this.selectQualitySource,
        };
    }

    async componentDidMount() {
        // console.log('MOUNT');
        window.addEventListener('resize', this.computeVideoBoxDimensions);

        const {
            about,
            controls,
            theme
        } = this.props;

        const _about = about === undefined ? this.context.about : about;
        const _controls = controls === undefined ? this.context.controls : controls;
        const _theme = theme === undefined ? this.context.theme : themes[theme];
        const _themeName = theme === undefined ? this.context.themeName : theme;


        // https://stackoverflow.com/a/43794379
        // const audioContext = new AudioContext();
        // const audioContextSource = audioContext.createMediaElementSource(this.video.current!);
        // // create a gain node
        // const gainNode = audioContext!.createGain();
        // gainNode.gain.value = 2; // double the volume
        // audioContextSource!.connect(gainNode);
        // // connect the gain node to an output destination
        // gainNode.connect(audioContext!.destination);
        // this.video.current!.volume = this.state.videoVolume;


        this.setState({
            about: _about,
            controls: _controls,
            theme: _theme,
            themeName: _themeName,
            video: this.video.current,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.computeVideoBoxDimensions);
    }

    public render() {
        // console.log('RENDER');
        const {
            src,
            type,
            width,
            height,
            videoStyle,
        } = this.props;

        const {
            controls,
            theme,
            videoLoaded,
            loading,
            imageWidth,
            toggledEditable,
            toggledSettingsButton,
            message,
            timescrollView,
            textTimescrollView,
            selectedQualitySourceSrc,
            // imageText,
        } = this.state;
        // console.log(imageText);

        const videoSrc = selectedQualitySourceSrc ? selectedQualitySourceSrc : src;
        // console.log(videoSrc);

        return (
            <Context.Provider value={this.state}>
                <StyledTextSelectVideo
                    theme={theme}
                    toggledEditable={toggledEditable}
                    imageWidth={imageWidth}
                    onMouseEnter={this.toggleSettingsButton}
                    onMouseLeave={this.toggleSettingsButton}
                    onMouseMove={this.verifySettingsButton}
                    ref={this.videoContainer}
                >
                    <video
                        width={width}
                        height={height}
                        style={{...videoStyle}}
                        ref={this.video}
                        onTimeUpdate={this.setVideoCurrentTime}
                        onLoadedData={this.handleLoadedVideo}
                        onLoadedMetadata={this.handleLoadedMetadata}
                    >
                        <source
                            src={videoSrc}
                            type={type}
                        />
                    </video>

                    {timescrollView && (
                        <TimescrollView />
                    )}

                    {textTimescrollView && (
                        <>
                            <TimescrollView
                                textTimescroll={true}
                            />
                        </>
                    )}

                    {videoLoaded && (
                        <SelectVideo />
                    )}

                    {toggledSettingsButton && controls && (
                        <Settings />
                    )}

                    {loading && (
                        <Spinner />
                    )}

                    {message && (
                        <Message
                            text={message}
                        />
                    )}
                </StyledTextSelectVideo>
            </Context.Provider>
        );
    }

    private setVideoCurrentTime = () => {
        const videoTime = this.video.current!.currentTime
        this.setState({
            videoTime,
        });
    }

    private setVideoTime = (videoTime: number) => {
        this.video.current!.currentTime = videoTime;
        this.setState({
            videoTime,
        });
    }

    private makeQualitySources = (qualitySources: any): any => {
        const autoSource = {
            quality: 'auto',
            src: '/determined/at/runtime',
        };

        if (!qualitySources) {
            return [autoSource];
        }

        return [...qualitySources, autoSource];
    }

    private selectQualitySource = (selectedQualitySource: number) => {
        const {
            qualitySources,
        } = this.state;

        if (!qualitySources) {
            return;
        }

        // set the adequate source
        const { src } = qualitySources![selectedQualitySource];
        // console.log(src);

        this.setState({
            selectedQualitySource,
            selectedQualitySourceSrc: src,
        });
    }

    private createTextVideo = () => {
        const {
            imageText,
            videoTime,
        } = this.state;

        const versionId = `tsi-version-${uuidv4()}`;
        const newVersion = { ...newTextVideoVersion };
        newVersion.id = versionId;
        newVersion.startTime = videoTime;
        newVersion.endTime = videoTime + 10;

        const textVideoId = `tsi-text-${uuidv4()}`;
        const newTextVideo = {
            id: textVideoId,
            currentVersionId: versionId,
            versions: [
                newVersion,
            ],
        };

        const updatedVideoText = [...imageText];
        updatedVideoText.push(newTextVideo);

        this.setState({
            imageText: updatedVideoText,
        });
    }

    private duplicateTextVideo = (duplicateId: string) => {
        const { imageText } = this.state;

        const updatedVideoText: any[] = duplicateTextVideo(duplicateId, imageText);

        this.setState({
            imageText: updatedVideoText,
        });
    }

    private updateTextVideo = (imageTextId: string, version: any) => {
        const { imageText } = this.state;

        const updatedVideoText: any[] = [];
        imageText.map((imgText: any) => {
            if (imgText.id === imageTextId) {
                const currentVersion = getVersionById(imgText.currentVersionId, imgText.versions);
                if (currentVersion.content === version.content) {
                    imgText = updateVersion(imgText, version);
                    updatedVideoText.push(imgText);
                    return true;
                } else {
                    imgText = pushNewVersion(imgText, version);
                    updatedVideoText.push(imgText);
                    return true;
                }
            }
            updatedVideoText.push(imgText);
            return true;
        });

        console.log(updatedVideoText);

        this.setState({
            imageText: updatedVideoText,
        });
    }

    private updateTextVideoField = (textId: string, element: string, value: any) => {
        const { imageText } = this.state;

        const updatedVideoText: any[] = [];
        imageText.map((imgText: any) => {
            if (imgText.id === textId) {
                const version = getVersionById(imgText.currentVersionId, imgText.versions);
                const currentVersion = {...version};
                currentVersion[element] = value;
                updatedVideoText.push(updateVersion({...imgText}, currentVersion));
                return;
            }

            updatedVideoText.push({...imgText});
            return;
        });
        // console.log(updatedVideoText);

        this.setState({
            imageText: updatedVideoText,
        });
    }

    private updateTextVideoBatch = (textId: string, elements: any) => {
        const { imageText } = this.state;

        const updatedVideoText: any[] = [];
        imageText.map((imgText: any) => {
            if (imgText.id === textId) {
                const version = getVersionById(imgText.currentVersionId, imgText.versions);
                const currentVersion = {...version};
                for (let element of elements) {
                    currentVersion[element.type] = element.value;
                }
                updatedVideoText.push(updateVersion({...imgText}, currentVersion));
                return;
            }

            updatedVideoText.push({...imgText});
            return;
        });

        this.setState({
            imageText: updatedVideoText,
        });
    }

    private deleteTextVideo = (id: string) => {
        const { imageText } = this.state;

        const updatedVideoText = imageText.filter((imgText: any) => {
            if (imgText.id === id) {
                return false;
            }
            return imgText;
        });

        this.setState({
            imageText: updatedVideoText,
        });
    }

    private toggleTimescrollView = () => {
        const {
            textTimescrollView,
        } = this.state;

        this.setState((prevState: any) => ({
            timescrollView: !prevState.timescrollView,
            textTimescrollView: false,
        }));
    }

    private toggleTextTimescrollView = () => {
        const {
            timescrollView,
        } = this.state;

        this.setState((prevState: any) => ({
            textTimescrollView: !prevState.textTimescrollView,
            timescrollView: false,
        }));
    }

    private toggleSettingsButton = () => {
        this.setState((prevState: any) => ({
            toggledSettingsButton: !prevState.toggledSettingsButton,
        }));
    }

    private verifySettingsButton = () => {
        const {
            toggledSettingsButton,
        } = this.state;

        if (!toggledSettingsButton) {
            this.setState((prevState: any) => ({
                toggledSettingsButton: !prevState.toggledSettingsButton,
            }));
        }
    }

    private toggleEditable = () => {
        this.setState((prevState: any) => ({
            toggledEditable: !prevState.toggledEditable,
        }));
    }

    private setEditorWidth = (editorWidth: number) => {
        this.setState({
            editorWidth,
        });
    }

    private computeVideoSha = async () => {
        const { src } = this.props;
        const imageSha = await computeVideoSha(src);
        this.setState({
            imageSha,
        },
            async () => {
                const {
                    getTextOnLoad,
                } = this.props;

                if (getTextOnLoad) {
                    await this.getAndSetText();
                }
            }
        );
    }

    private setMessage = (message: string, time?: number) => {
        if (!time) {
            this.setState({
                message,
            });
            return;
        }

        this.setState({
            message,
        },
            () => {
                setTimeout(() => {
                    this.setState({
                        message: '',
                    });
                }, time)
            }
        );
        return;
    }

    /**
     * Graphql query to the apiEndpoint (with apiKey if it exists)
     * to get the data based on the imageSha of the image.
     */
    private getText = async () => {
        // const { apiKey } = this.props;

        const {
            imageSha,
        } = this.state;

        try {
            this.setState({
                loading: true,
            });

            const query = await this.client
                .query({
                    query: getTextSelectVideo,
                    variables: {
                        imageSha,
                    },
                    fetchPolicy: 'no-cache',
                });

            const { status, textSelectVideo } = query.data.textSelectVideo;

            if (!query.loading) {
                this.setState({
                    loading: false,
                });
            }

            if (!status) {
                return [];
            }

            return textSelectVideo.imageText;
        } catch(err) {
            return [];
        }
    }

    private getAndSetText = async () => {
        this.setMessage('Obtaining Text. Please Wait.');

        const imageText = await this.getText();

        if (imageText.length > 0) {
            this.setState({
                imageText,
            },
                () => {
                    this.setMessage('Rendered Text.', 2500);
                }
            );
        } else {
            this.setState({
                imageText,
            },
                () => {
                    this.setMessage('No Text Stored. Add or Extract Text.', 2500);
                }
            );
        }
    }

    /**
     * Graphql query to the apiEndpoint (with apiKey if it exists)
     * to extract the data from the image on the imageSha.
     */
    private extractText = async () => {
        try {
            const {
                imageSha,
            } = this.state;

            const imageSrc = new URL(this.props.src, window.location.href).href;

            this.setState({
                loading: true,
            });

            const query = await this.client
                .query({
                    query: extractTextSelectVideo,
                    variables: {
                        imageSrc: imageSrc,
                        imageSha,
                    },
                    fetchPolicy: 'no-cache',
                });

            if (!query.loading) {
                this.setState({
                    loading: false,
                });
            }

            const { status, errors } = query.data.extractTextSelectVideo;

            if (!status) {
                const [error] = errors;

                if (error.path === 'exists/TextSelectVideo') {
                    this.setMessage('Text Extracted Already.', 3000);
                }

                return {};
            }

            if (status) {
                let intervalIterations = 0;

                this.setMessage('Extracting Text. Please Wait.');

                this.setState({
                    loading: true,
                });

                this.extractInterval = setInterval(async () => {
                    try {
                        intervalIterations += 1;
                        const imageText = await this.getText();
                        if (imageText.length > 0) {
                            this.setMessage('Rendered Text.', 2500);
                            this.setState({
                                imageText,
                                loading: false,
                            },
                                () => {
                                    clearInterval(this.extractInterval);
                                }
                            );
                        }

                        if (intervalIterations > 5) {
                            this.setMessage('Could Not Extract Text.', 4000);
                            this.setState({
                                imageText,
                                loading: false,
                            },
                                () => {
                                    clearInterval(this.extractInterval);
                                }
                            );
                        }
                    } catch(err) {
                        console.log(err);
                    }
                }, 3000);
            }

            return {};
        } catch(err) {
            return {};
        }
    }

    private processVideoText = (imageText: any) => {
        return [
            {
              "id": "tsi-text-dce8dd0e5fdb4289bb63c3dd5bf81991",
              "currentVersionId": "tsi-version-c2eec1b1bc3d451cbbb07c5bad18286e",
              "versions": [
                {
                   "createdBy": "9275a194b1464ab1a76730271a3aad75",
                   "id": "tsi-version-c2eec1b1bc3d451cbbb07c5bad18286e",
                   "xCoordPercentage": 25.3750,
                   "yCoordPercentage": 36.0690,
                   "perspective": "",
                   "rotation": "",
                   "skew": "",
                   "color": "red",
                   "fontFamily": "Arial",
                   "fontSizePercentage": 7.4467,
                   "bold": true,
                   "italic": false,
                   "letterSpacingPercentage": 0.1750,
                   "lineHeight": "auto",
                   "wordSpacingPercentage": 0,
                   "content": "eat.yourvegetables.com",
                   "link": true,
                   "linkTo": "https://github.com/plurid/text-select-image",
                   "viewable": false
                }
              ]
            },
            {
              "id": "tsi-text-f3160c7e5d274372a41f9ba0c073e935",
              "currentVersionId": "tsi-version-cfef2e114e6540fe980a7136046a9fb0",
              "versions": [
                {
                   "createdBy": "9275a194b1464ab1a76730271a3aad75",
                   "id": "tsi-version-cfef2e114e6540fe980a7136046a9fb0",
                   "xCoordPercentage": 28.75,
                   "yCoordPercentage": 62.3661,
                   "perspective": "",
                   "rotation": "",
                   "skew": "",
                   "color": "black",
                   "fontFamily": "Arial",
                   "fontSizePercentage": 8.1448,
                   "bold": true,
                   "italic": false,
                   "letterSpacingPercentage": -0.0625,
                   "lineHeight": "auto",
                   "wordSpacingPercentage": 0.35,
                   "content": "Eat your vegetables!",
                   "link": false,
                   "linkTo": "",
                   "viewable": false
                }
              ]
            }
        ];
    }

    /**
     * Graphql mutation to the apiEndpoint (with apiKey if it exists)
     * to mutate the data of the image based on the imageSha.
     */
    private saveVideoText = async () => {
        try {
            const {
                imageSha,
                imageText,
            } = this.state;

            const updateVideoText = this.processVideoText(imageText);

            const input = {
                imageSha,
                imageText: updateVideoText,
            };

            console.log(imageSha);
            console.log(imageText);

            this.setState({
                loading: true,
            });

            const mutation: any = await this.client
                .mutate({
                    mutation: updateTextSelectVideo,
                    variables: {
                        input,
                    },
                });

            if (!mutation.loading) {
                this.setState({
                    loading: false,
                });
            }

            console.log(mutation);
            const { status, textSelectVideo } = mutation.data.updateTextSelectVideo;

            // // if the image does not exist, it should create it based on the sha and save the data
            if (!status) {
                return false;
            }

            this.setState({
                imageText: textSelectVideo.imageText,
            });

            return true;
        } catch(err) {
            console.log(err);
            return false;
        }
    }

    private updateText = () => {
        // to debounce the update to database every updateDebounce seconds

        const { updateDebounce } = this.state;
    }
}


export default TextSelectVideo;
