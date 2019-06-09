import React, { Component } from 'react';

import Context from '../../context';

import PlayIcon from '../../assets/play-icon';
import PauseIcon from '../../assets/pause-icon';
import TimescrollIcon from '../../assets/timescroll-icon';
import AboutIcon from '../../assets/about-icon';
import AddTextIcon from '../../assets/add-text-icon';
import SaveVideoTextIcon from '../../assets/save-image-text-icon';
import GetTextIcon from '../../assets/get-text-icon';
import ExtractTextIcon from '../../assets/extract-text-icon';

import { ABOUT_URL } from '../../data/constants';

import {
    StyledSettingsMenu,
} from './styled';

import ButtonCheckmark from '../ButtonCheckmark';
import ButtonItem from '../ButtonItem';
import ButtonSliderItem from '../ButtonSliderItem';
import ButtonTimescroll from '../ButtonTimescroll';



class SettingsMenu extends Component<any, any> {
    static contextType = Context;

    state = {
        menuOpacity: 1,
    };

    public render() {
        const {
            menuOpacity,
        } = this.state;

        const {
            about,
            theme,
            videoPlaying,
            toggleEditable,
            toggledEditable,

            videoVolume,
            setVideoVolume,

            videoPlaybackRate,
            setVideoPlaybackRate,

            timescrollView,
            toggleTimescrollView,
        } = this.context;

        return (
            <StyledSettingsMenu
                theme={theme}
                style={{
                    opacity: menuOpacity
                }}
            >
                <ul>
                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.playPause}
                            icon={videoPlaying ? PauseIcon : PlayIcon}
                            text={videoPlaying ? 'Pause' : 'Play'}
                        />
                    </li>

                    <li>
                        <ButtonTimescroll
                            toggle={toggleTimescrollView}
                            toggled={timescrollView}
                        />
                    </li>

                    <li>
                        <ButtonSliderItem
                            theme={theme}
                            type="volume"
                            name="Volume"
                            min={0}
                            max={2}
                            setValue={setVideoVolume}
                            value={videoVolume}
                            valueSign=""
                            defaultValue={0.75}
                            step={0.01}
                            normalized={true}
                            toggleMenuOpaque={this.toggleMenuOpaque}
                        />
                    </li>

                    <li>
                        <ButtonSliderItem
                            theme={theme}
                            type="playback"
                            name="Playback Rate"
                            min={0.25}
                            max={2.25}
                            setValue={setVideoPlaybackRate}
                            value={videoPlaybackRate}
                            valueSign=""
                            step={0.01}
                            normalized={true}
                            defaultValue={1}
                            toggleMenuOpaque={this.toggleMenuOpaque}
                        />
                    </li>

                    <hr />

                    <li>
                        <ButtonCheckmark
                            theme={theme}
                            toggle={toggleEditable}
                            text="Edit Text"
                            checked={toggledEditable}
                        />
                    </li>

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.addText}
                            icon={AddTextIcon}
                            text="Add Text"
                        />
                    </li>

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.saveText}
                            icon={SaveVideoTextIcon}
                            text="Save Video Text"
                        />
                    </li>

                    <hr />

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.getText}
                            icon={GetTextIcon}
                            text="Get Text"
                        />
                    </li>

                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.extractText}
                            icon={ExtractTextIcon}
                            text="Extract Text"
                        />
                    </li>

                    {about && (
                        <hr />
                    )}

                    {about && (
                        <li>
                            <ButtonItem
                                theme={theme}
                                atClick={this.about}
                                icon={AboutIcon}
                                text="About TSV"
                            />
                        </li>
                    )}
                </ul>
            </StyledSettingsMenu>
        );
    }

    private toggleMenuOpaque = () => {
        const {
            menuOpacity,
        } = this.state;

        if (menuOpacity === 1) {
            this.setState({
                menuOpacity: 0.7,
            });
        } else {
            this.setState({
                menuOpacity: 1,
            });
        }
    }

    private playPause = () => {
        const {
            videoPlaying,
            playVideo,
            pauseVideo,
        } = this.context;

        if (videoPlaying) {
            pauseVideo()
        } else {
            playVideo();
        }
    }

    private setValue = (type: any, value: any) => {
        if (type === 'volume') {
            this.setState({
                volumeValue: value,
            });
        }
        if (type === 'playback') {
            this.setState({
                playbackValue: value,
            });
        }
    }

    private addText = () => {
        const {
            // toggleSettings,
            createTextVideo,
        } = this.context;

        // toggleSettings();
        createTextVideo();
    }

    private saveText = () => {
        const {
            // toggleSettings,
            saveVideoText,
        } = this.context;

        // toggleSettings();
        saveVideoText();
    }

    private getText = async () => {
        const {
            toggleSettings,
            getAndSetText,
        } = this.context;

        toggleSettings();
        await getAndSetText();
    }

    private extractText = async () => {
        const {
            toggleSettings,
            extractText,
        } = this.context;

        toggleSettings();
        await extractText();
    }

    private about = () => {
        const {
            toggleSettings,
        } = this.context;

        toggleSettings();
        const aboutURL = ABOUT_URL;
        window.open(aboutURL, '_blank');
    }
}


export default SettingsMenu;
