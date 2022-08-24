import React, {
    useContext,
} from 'react';

import {
    StyledSettings,
    StyledSettingsButton,
} from './styled';

import Context from '../../services/context';

import SettingsIcon from '../../assets/icons/settings-icon';

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
                onClick={() => setShowSettingsMenu((show: any) => !show)}
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
