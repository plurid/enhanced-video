import React, { Component } from 'react';

import Context from '../../context';

import {
    StyledButtonMoreMenu,
} from './styled';

import ButtonItem from '../ButtonItem';

import CopyIcon from '../../assets/copy-icon';
// import TranslateIcon from '../../assets/translate-icon';

import copyToClipboard from '../../utils/clipboard';



class ButtonMoreMenu extends Component<any, any> {
    static contextType = Context;

    state = {
    };

    public render() {
        const {
            theme
        } = this.context;

        return (
            <StyledButtonMoreMenu
                theme={theme}
            >
                <ul>
                    <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.copyText}
                            icon={CopyIcon}
                            text="Copy"
                        />
                    </li>
                    {/* <li>
                        <ButtonItem
                            theme={theme}
                            atClick={this.translate}
                            icon={TranslateIcon}
                            text="Translate"
                        />
                    </li> */}
                </ul>
            </StyledButtonMoreMenu>
        );
    }

    private copyText = () => {
        const {
            content,
            toggleMenu,
            toggleShow,
        } = this.props;

        copyToClipboard(content);
        toggleMenu();
        toggleShow();
    }

    // private translate = () => { }
}


export default ButtonMoreMenu;
