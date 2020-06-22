import React, {
    useContext,
} from 'react';

import {
} from './styled';

import Drawer from '../../Drawer';

import Context from '../../../services/context';



const DrawerColor: React.FC<any> = (
    properties: any,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        expandColorDrawer,
        setExpandColorDrawer,
    } = context;


    /** handlers */


    /** render */
    return (
        <Drawer
            title="Color"
            expand={expandColorDrawer}
            toggleExpand={() => setExpandColorDrawer(expand => !expand)}
            theme={theme}
        >
            color
        </Drawer>
    );
}


export default DrawerColor;
