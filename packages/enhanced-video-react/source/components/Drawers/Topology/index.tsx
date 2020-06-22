import React, {
    useContext,
} from 'react';

import {
} from './styled';

import Drawer from '../../Drawer';

import Context from '../../../services/context';



const DrawerTopology: React.FC<any> = (
    properties: any,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        expandTopologyDrawer,
        setExpandTopologyDrawer,
    } = context;


    /** handlers */


    /** render */
    return (
        <Drawer
            title="Topology"
            expand={expandTopologyDrawer}
            toggleExpand={() => setExpandTopologyDrawer(expand => !expand)}
            theme={theme}
        >
            topology
        </Drawer>
    );
}


export default DrawerTopology;
