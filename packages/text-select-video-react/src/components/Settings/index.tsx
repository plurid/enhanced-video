import React, {
    useContext,
} from 'react';

import {
    StyledSettings,
    StyledSettingsButton,
} from './styled';

import Context from '../../services/utilities/context';

import SettingsIcon from '../../assets/settings-icon';

import SettingsMenu from './components/SettingsMenu';
import TimescrollTime from './components/TimescrollTime';
import TimescrollText from './components/TimescrollText';



const Settings: React.FC<any> = () => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const {
        theme,

        showSettingsMenu,
        setShowSettingsMenu,

        showTimescrollTime,
        showTimescrollText,
    } = context;

    return (
        <StyledSettings
            theme={theme}
        >
            <StyledSettingsButton
                onClick={() => setShowSettingsMenu(show => !show)}
            >
                {SettingsIcon}
            </StyledSettingsButton>

            {showSettingsMenu && (
                <SettingsMenu />
            )}

            {showTimescrollTime && (
                <TimescrollTime />
            )}

            {showTimescrollText && (
                <TimescrollText />
            )}
        </StyledSettings>
    );
}


export default Settings;
