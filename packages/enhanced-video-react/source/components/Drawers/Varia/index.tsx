import React, {
    useContext,
} from 'react';

import {
    PluridIconFrame,
    PluridIconInfo,
} from '@plurid/plurid-icons-react';

// import {
// } from './styled';

import Drawer from '../../Drawer';

import ButtonItem from '../../UI/ButtonItem';

import Context from '../../../services/context';



const DrawerVaria: React.FC<any> = (
    properties: any,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        expandVariaDrawer,
        setExpandVariaDrawer,

        variaDrawer,

        toggleFullscreen,

        about,
        viewAbout,
    } = context;


    /** handlers */


    /** render */
    return (
        <Drawer
            title="Varia"
            expand={expandVariaDrawer}
            toggleExpand={() => setExpandVariaDrawer(expand => !expand)}
            theme={theme}
        >
            <ul>
                {(variaDrawer.includes('ALL') || variaDrawer.includes('VIEW_FULLSCREEN'))
                && (
                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={toggleFullscreen}
                            icon={(
                                <PluridIconFrame />
                            )}
                            text="View Fullscreen"
                        />
                    </li>
                )}

                {about && (
                    <>
                        <hr />

                        <li>
                            <ButtonItem
                                theme={theme}
                                atClick={viewAbout}
                                icon={(
                                    <PluridIconInfo />
                                )}
                                text="About eVideo"
                            />
                        </li>
                    </>
                )}
            </ul>
        </Drawer>
    );
}


export default DrawerVaria;
