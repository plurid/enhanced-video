import React, {
    useContext,
} from 'react';

import {
} from './styled';

import Drawer from '../../Drawer';

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
            varia
        </Drawer>
    );
}


export default DrawerVaria;
