import React, {
    useContext,
    useRef,
    useState,
    useEffect,
} from 'react';

import Context from '../../../../../services/utilities/context';

import PlayIcon from '../../../../assets/play-icon';
import PauseIcon from '../../../../assets/pause-icon';
import VolumeHighIcon from '../../../../assets/volume-high-icon';
import VolumeMiddleIcon from '../../../../assets/volume-middle-icon';
import VolumeLowIcon from '../../../../assets/volume-low-icon';
import VolumeMutedIcon from '../../../../assets/volume-muted-icon';
import AboutIcon from '../../../../assets/about-icon';
import AddTextIcon from '../../../../assets/add-text-icon';
import SaveTextIcon from '../../../../assets/save-text-icon';
import GetTextIcon from '../../../../assets/get-text-icon';
import MarkTextTimeUntoggledIcon from '../../../../assets/mark-text-time-untoggled-icon';
import MarkTextTimeToggledIcon from '../../../../assets/mark-text-time-toggled-icon';
import ExtractTextIcon from '../../../../assets/extract-text-icon';

import { ABOUT_URL } from '../../../../../data/constants/general';

import {
    StyledSettingsMenu,
    StyledSettingsMenuContainer,
} from './styled';

import ButtonCheckmark from '../../../UI/ButtonCheckmark';
import ButtonItem from '../../../UI/ButtonItem';
import ButtonSliderItem from '../../../UI/ButtonSliderItem';
import ButtonTimescroll from '../../../UI/ButtonTimescroll';



const SettingsMenu: React.FC<any> = () => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const settingsMenu = useRef<HTMLDivElement>(null);

    const [menuOpacity, setMenuOpacity] = useState(1);
    const [menuHeight, setMenuHeight] = useState(0);

    const {
        about,
        theme,
        videoPlaying,

        playVideo,
        pauseVideo,

        videoVolume,
        toggleVideoVolume,
        handleVideoVolume,

        videoPlaybackRate,
        handleVideoPlaybackRate,

        editableText,
        setEditableText,

        qualitySources,
        qualitySource,
        setQualitySource,

        showTimescrollTime,
        setShowTimescrollTime,
        showTimescrollText,
        setShowTimescrollText,

        videoContainerDimensions,

        addText,
        saveText,
        getText,
    } = context;

    const VideoVolumeIcon = videoVolume == 0
        ? VolumeMutedIcon
        : videoVolume < 0.7
            ? VolumeLowIcon
            : videoVolume < 1.3
                ? VolumeMiddleIcon
                : VolumeHighIcon;


    const handlePlayPause = () => {
        videoPlaying ? pauseVideo() : playVideo();
    }

    const handleAddText = () => {
        addText();
    }

    const handleSaveText = async () => {
        await saveText();
    }

    const handleGetText = async () => {
        await getText();
    }

    const handleExtractFrame = () => {

    }

    const handleMarkTextTime = () => {
        setShowTimescrollText(show => !show);
    }

    const handleAboutClick = () => {
        window.open(ABOUT_URL, '_blank');
    }

    const toggleMenuOpaque = () => {

    }

    useEffect(() => {
        if (settingsMenu.current) {
            const containerHeight = videoContainerDimensions.height;
            const menuHeight = settingsMenu.current.offsetHeight;

            if (containerHeight < menuHeight) {
                setMenuHeight(containerHeight - 70);
            } else {
                setMenuHeight(menuHeight);
            }
        }
    }, [])

    return (
        <StyledSettingsMenu
            ref={settingsMenu}
            theme={theme}
            height={menuHeight}
            style={{
                opacity: menuOpacity
            }}
        >
            <StyledSettingsMenuContainer
                height={menuHeight}
            >
                <ul>
                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={handlePlayPause}
                            icon={videoPlaying ? PauseIcon : PlayIcon}
                            text={videoPlaying ? 'Pause' : 'Play'}
                        />
                    </li>

                    <li>
                        <ButtonTimescroll
                            toggle={setShowTimescrollTime}
                            toggled={showTimescrollTime}
                        />
                    </li>

                    <li>
                        <ButtonSliderItem
                            theme={theme}
                            icon={VideoVolumeIcon}
                            iconClick={toggleVideoVolume}
                            type="volume"
                            name="Volume"
                            min={0}
                            max={2}
                            setValue={handleVideoVolume}
                            value={videoVolume}
                            valueSign=""
                            defaultValue={0.75}
                            step={0.01}
                            normalized={true}
                            toggleMenuOpaque={toggleMenuOpaque}
                        />
                    </li>

                    <li>
                        <ButtonSliderItem
                            theme={theme}
                            type="playback"
                            name="Playback Rate"
                            min={0.25}
                            max={2.25}
                            setValue={handleVideoPlaybackRate}
                            value={videoPlaybackRate}
                            valueSign=""
                            step={0.01}
                            normalized={true}
                            defaultValue={1}
                            toggleMenuOpaque={toggleMenuOpaque}
                        />
                    </li>

                    {qualitySources && (
                        <li>
                            <ButtonSliderItem
                                theme={theme}
                                type="quality"
                                name="Quality"
                                min={0}
                                max={qualitySources.length - 1}
                                setValue={setQualitySource}
                                value={qualitySource}
                                valueString={qualitySources[qualitySource].quality}
                                step={1}
                                defaultValue={qualitySources.length - 1}
                                toggleMenuOpaque={toggleMenuOpaque}
                            />
                        </li>
                    )}

                    <hr />

                    <li>
                        <ButtonCheckmark
                            theme={theme}
                            toggle={setEditableText}
                            text="Edit Text"
                            checked={editableText}
                        />
                    </li>

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={handleAddText}
                            icon={AddTextIcon}
                            text="Add Text"
                        />
                    </li>

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={handleSaveText}
                            icon={SaveTextIcon}
                            text="Save Text"
                        />
                    </li>

                    <hr />

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={handleGetText}
                            icon={GetTextIcon}
                            text="Get Text"
                        />
                    </li>

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={handleMarkTextTime}
                            icon={showTimescrollText ? MarkTextTimeToggledIcon : MarkTextTimeUntoggledIcon}
                            text="Mark Text Time"
                        />
                    </li>

                    {/* <li>
                        <ButtonItem
                            theme={theme}
                            atClick={handleExtractFrame}
                            icon={ExtractTextIcon}
                            text="Extract Frame"
                        />
                    </li> */}

                    {about && (
                        <hr />
                    )}

                    {about && (
                        <li>
                            <ButtonItem
                                theme={theme}
                                atClick={handleAboutClick}
                                icon={AboutIcon}
                                text="About TSV"
                            />
                        </li>
                    )}
                </ul>
            </StyledSettingsMenuContainer>
        </StyledSettingsMenu>
    );
}



//     private toggleMenuOpaque = () => {
//         const {
//             menuOpacity,
//         } = this.state;

//         if (menuOpacity === 1) {
//             this.setState({
//                 menuOpacity: 0.7,
//             });
//         } else {
//             this.setState({
//                 menuOpacity: 1,
//             });
//         }
//     }

//     private setValue = (type: any, value: any) => {
//         if (type === 'volume') {
//             this.setState({
//                 volumeValue: value,
//             });
//         }
//         if (type === 'playback') {
//             this.setState({
//                 playbackValue: value,
//             });
//         }
//     }

//     private addText = () => {
//         const {
//             // toggleSettings,
//             createTextVideo,
//         } = this.context;

//         // toggleSettings();
//         createTextVideo();
//     }

//     private saveText = () => {
//         const {
//             // toggleSettings,
//             saveVideoText,
//         } = this.context;

//         // toggleSettings();
//         saveVideoText();
//     }

//     private getText = async () => {
//         const {
//             toggleSettings,
//             getAndSetText,
//         } = this.context;

//         toggleSettings();
//         await getAndSetText();
//     }

//     private markTextTime = () => {
//         console.log('mark text time');
//         const {
//             toggleTextTimescrollView
//         } = this.context;

//         toggleTextTimescrollView();
//     }

//     private extractFrame = () => {

//     }

//     private extractText = async () => {
//         const {
//             toggleSettings,
//             extractText,
//         } = this.context;

//         toggleSettings();
//         await extractText();
//     }


export default SettingsMenu;
