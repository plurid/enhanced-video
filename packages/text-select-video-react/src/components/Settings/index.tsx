import React, {
    useContext,
} from 'react';

import {
    StyledSettings,
    StyledSettingsButton,
} from './styled';

import SettingsIcon from '../../assets/settings-icon';

import Context from '../../services/utilities/context';

import SettingsMenu from './components/SettingsMenu';




const Settings: React.FC<any> = () => {
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const {
        theme,

        showSettingsMenu,
        setShowSettingsMenu,
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
        </StyledSettings>
    );
}


export default Settings;
