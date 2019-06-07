import React, { Component } from 'react';

import Context from '../../context';

import AboutIcon from '../../assets/about-icon';
import AddTextIcon from '../../assets/add-text-icon';
import SaveVideoTextIcon from '../../assets/save-image-text-icon';
import GetTextIcon from '../../assets/get-text-icon';
import ExtractTextIcon from '../../assets/extract-text-icon';

import { ABOUT_URL } from '../../data/constants';

import {
    StyledTextSelectVideoSettingsMenu,
} from './styled';

import TextSelectVideoButtonCheckmark from '../TextSelectVideoButtonCheckmark';
import TextSelectVideoButtonItem from '../TextSelectVideoButtonItem';



class TextSelectVideoSettingsMenu extends Component<any, any> {
    static contextType = Context;

    public render() {
        const {
            about,
            theme,
            toggleEditable,
            toggledEditable,
        } = this.context;

        return (
            <StyledTextSelectVideoSettingsMenu
                theme={theme}
            >
                <ul>
                    <li>
                        <TextSelectVideoButtonCheckmark
                            theme={theme}
                            toggle={toggleEditable}
                            text="Edit Text"
                            checked={toggledEditable}
                        />
                    </li>

                    <li>
                        <TextSelectVideoButtonItem
                            theme={theme}
                            atClick={this.addText}
                            icon={AddTextIcon}
                            text="Add Text"
                        />
                    </li>

                    <li>
                        <TextSelectVideoButtonItem
                            theme={theme}
                            atClick={this.saveText}
                            icon={SaveVideoTextIcon}
                            text="Save Video Text"
                        />
                    </li>

                    <hr />

                    <li>
                        <TextSelectVideoButtonItem
                            theme={theme}
                            atClick={this.getText}
                            icon={GetTextIcon}
                            text="Get Text"
                        />
                    </li>

                    <li>
                        <TextSelectVideoButtonItem
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
                            <TextSelectVideoButtonItem
                                theme={theme}
                                atClick={this.about}
                                icon={AboutIcon}
                                text="About TSV"
                            />
                        </li>
                    )}
                </ul>
            </StyledTextSelectVideoSettingsMenu>
        );
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


export default TextSelectVideoSettingsMenu;
