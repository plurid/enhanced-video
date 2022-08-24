import React, {
    useContext,
} from 'react';

import {
} from './styled';

import Drawer from '../../Drawer';

import ButtonCheckmark from '../../UI/ButtonCheckmark';

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

        flipVertical,
        setFlipVertical,

        flipHorizontal,
        setFlipHorizontal,
    } = context;


    /** handlers */


    /** render */
    return (
        <Drawer
            title="Topology"
            expand={expandTopologyDrawer}
            toggleExpand={() => setExpandTopologyDrawer((expand: any) => !expand)}
            theme={theme}
        >
            <ul>
                <li>
                    <ButtonCheckmark
                        theme={theme}
                        toggle={() => setFlipVertical((flip: any) => !flip)}
                        text="Flip Vertical"
                        checked={flipVertical}
                    />
                </li>

                <li>
                    <ButtonCheckmark
                        theme={theme}
                        toggle={() => setFlipHorizontal((flip: any) => !flip)}
                        text="Flip Horizontal"
                        checked={flipHorizontal}
                    />
                </li>
            </ul>
        </Drawer>
    );
}


export default DrawerTopology;
