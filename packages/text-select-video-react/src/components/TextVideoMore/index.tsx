import React, { Component } from 'react';

import Context from '../../context';

import TextVideoMoreMenu from '../TextVideoMoreMenu';

import {
    StyledTextVideoMore,
    StyledTextVideoMoreButton,
} from './styled';

import MoreIcon from '../../assets/more-icon';



class TextVideoMore extends Component<any, any> {
    static contextType = Context;

    state = {
        showMenu: false,
    };

    public render() {
        const {
            showMenu,
        } = this.state;

        const {
            content,
            toggleShow,
        } = this.props;

        return (
            <StyledTextVideoMore>
                <StyledTextVideoMoreButton
                    onClick={this.toggleMenu}
                >
                    {MoreIcon}
                </StyledTextVideoMoreButton>

                {showMenu && (
                    <TextVideoMoreMenu
                        content={content}
                        toggleMenu={this.toggleMenu}
                        toggleShow={toggleShow}
                    />
                )}
            </StyledTextVideoMore>
        );
    }

    private toggleMenu = () => {
        this.setState((prevState: any) => ({
            showMenu: !prevState.showMenu,
        }));
    }
}


export default TextVideoMore;
