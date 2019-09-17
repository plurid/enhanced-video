import React, { Component } from 'react';

import SettingsIcon from '../../assets/settings-icon';

import {
    StyledSettings,
    StyledSettingsButton,
} from './styled';

import Context from '../../context';

import SettingsMenu from '../SettingsMenu';



class Settings extends Component<any, any> {
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
                        <StyledSettings
                            theme={theme}
                        >
                            <StyledSettingsButton
                                onClick={toggleSettings}
                            >
                                {SettingsIcon}
                            </StyledSettingsButton>

                            {toggledSettings && (
                                <SettingsMenu
                                />
                            )}
                        </StyledSettings>
                    )
                }}
            </Context.Consumer>
        );
    }
}


export default Settings;
