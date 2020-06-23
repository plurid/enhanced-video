import React, {
    useContext,
    useState,
} from 'react';

import {
    PluridIconMore,
} from '@plurid/plurid-icons-react';

import {
    StyledLegacyMoreContainer,
    StyledLegacyMoreIcon,
    StyledLegacyMoreMenu,
} from './styled';

import DrawerText from '../../../../../Drawers/Text';
import DrawerColor from '../../../../../Drawers/Color';
import DrawerTopology from '../../../../../Drawers/Topology';
import DrawerVaria from '../../../../../Drawers/Varia';

import Context from '../../../../../../services/context';



const LegacyMore: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        settingsDrawers,
    } = context;


    /** state */
    const [showMenu, setShowMenu] = useState(false);


    /** render */
    return (
        <StyledLegacyMoreContainer>
            <StyledLegacyMoreIcon
                active={showMenu}
                onClick={() => {
                    setShowMenu(show => !show);
                }}
            >
                <PluridIconMore />
            </StyledLegacyMoreIcon>

            {showMenu && (
                <StyledLegacyMoreMenu
                    theme={theme}
                >
                    <ul>
                        {(settingsDrawers.includes('ALL') || settingsDrawers.includes('TEXT'))
                        && (
                            <DrawerText />
                        )}

                        {(settingsDrawers.includes('ALL') || settingsDrawers.includes('COLOR'))
                        && (
                            <DrawerColor />
                        )}

                        {(settingsDrawers.includes('ALL') || settingsDrawers.includes('TOPOLOGY'))
                        && (
                            <DrawerTopology />
                        )}

                        {(settingsDrawers.includes('ALL') || settingsDrawers.includes('VARIA'))
                        && (
                            <DrawerVaria />
                        )}
                    </ul>
                </StyledLegacyMoreMenu>
            )}
        </StyledLegacyMoreContainer>
    );
}


export default LegacyMore;
