import React, { Component } from 'react';

import Context from '../../context';

import { StyledTextVideoMoreMenu } from './styled';

import TextSelectVideoButtonItem from '../TextSelectVideoButtonItem';
import CopyIcon from '../../assets/copy-icon';
// import TranslateIcon from '../../assets/translate-icon';

import copyToClipboard from '../../utils/clipboard';



class TextVideoMoreMenu extends Component<any, any> {
    static contextType = Context;

    state = {
    };

    public render() {
        const {
            theme
        } = this.context;

        return (
            <StyledTextVideoMoreMenu
                theme={theme}
            >
                <ul>
                    <li>
                        <TextSelectVideoButtonItem
                            theme={theme}
                            atClick={this.copyText}
                            icon={CopyIcon}
                            text="Copy"
                        />
                    </li>
                    {/* <li>
                        <TextSelectVideoButtonItem
                            theme={theme}
                            atClick={this.translate}
                            icon={TranslateIcon}
                            text="Translate"
                        />
                    </li> */}
                </ul>
            </StyledTextVideoMoreMenu>
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


export default TextVideoMoreMenu;
