import React, {
    useContext,
} from 'react';

import {
} from './styled';

import AddTextIcon from '../../../assets/icons/add-text-icon';
import SaveTextIcon from '../../../assets/icons/save-text-icon';
import GetTextIcon from '../../../assets/icons/get-text-icon';
import MarkTextTimeUntoggledIcon from '../../../assets/icons/mark-text-time-untoggled-icon';
import MarkTextTimeToggledIcon from '../../../assets/icons/mark-text-time-toggled-icon';

import Drawer from '../../Drawer';

import ButtonCheckmark from '../../UI/ButtonCheckmark';
import ButtonItem from '../../UI/ButtonItem';

import Context from '../../../services/context';



const DrawerText: React.FC<any> = (
    properties: any,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        editableText,
        setEditableText,

        showTimescrollText,

        expandTextDrawer,
        setExpandTextDrawer,

        setShowTimescrollText,

        addText,
        saveText,
        getText,
    } = context;


    /** handlers */

    const handleAddText = () => {
        addText();
    }

    const handleSaveText = async () => {
        await saveText();
    }

    const handleGetText = async () => {
        await getText();
    }

    const handleMarkTextTime = () => {
        setShowTimescrollText(show => !show);
    }


    /** render */
    return (
        <Drawer
            title="Text"
            expand={expandTextDrawer}
            toggleExpand={() => setExpandTextDrawer(expand => !expand)}
            theme={theme}
        >
            <li>
                <ButtonCheckmark
                    theme={theme}
                    toggle={setEditableText}
                    text="Edit Text"
                    checked={editableText}
                />
            </li>

            <li>
                <ButtonItem
                    theme={theme}
                    atClick={handleAddText}
                    icon={AddTextIcon}
                    text="Add Text"
                />
            </li>

            <li>
                <ButtonItem
                    theme={theme}
                    atClick={handleSaveText}
                    icon={SaveTextIcon}
                    text="Save Text"
                />
            </li>

            <hr />

            <li>
                <ButtonItem
                    theme={theme}
                    atClick={handleGetText}
                    icon={GetTextIcon}
                    text="Get Text"
                />
            </li>

            <li>
                <ButtonItem
                    theme={theme}
                    atClick={handleMarkTextTime}
                    icon={showTimescrollText ? MarkTextTimeToggledIcon : MarkTextTimeUntoggledIcon}
                    text="Mark Text Time"
                />
            </li>

            {/* <li>
                <ButtonItem
                    theme={theme}
                    atClick={handleExtractFrame}
                    icon={ExtractTextIcon}
                    text="Extract Frame"
                />
            </li> */}
        </Drawer>
    );
}


export default DrawerText;
