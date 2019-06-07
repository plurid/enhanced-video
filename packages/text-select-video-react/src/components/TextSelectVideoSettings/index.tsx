import React, { Component } from 'react';

import SettingsIcon from '../../assets/settings-icon';

import {
    StyledTextSelectVideoSettings,
    StyledTextSelectVideoSettingsButton,
} from './styled';

import Context from '../../context';

import TextSelectVideoSettingsMenu from '../TextSelectVideoSettingsMenu';



class TextSelectVideoSettings extends Component<any, any> {
    public render() {
        return (
            <Context.Consumer>
                {context => {
                    const {
                        theme,
                        toggleSettings,
                        toggledSettings,
                    } = context;

                    return (
                        <StyledTextSelectVideoSettings
                            theme={theme}
                        >
                            <StyledTextSelectVideoSettingsButton
                                onClick={toggleSettings}
                            >
                                {SettingsIcon}
                            </StyledTextSelectVideoSettingsButton>

                            {toggledSettings && (
                                <TextSelectVideoSettingsMenu
                                />
                            )}
                        </StyledTextSelectVideoSettings>
                    )
                }}
            </Context.Consumer>
        );
    }
}


export default TextSelectVideoSettings;
