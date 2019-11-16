import React, { Component } from 'react';

import Context from '../../../services/utilities/context';

import ButtonMoreMenu from '../ButtonMoreMenu';

import {
    StyledMore,
    StyledMoreButton,
} from './styled';

import MoreIcon from '../../../assets/icons/more-icon';



class ButtonMore extends Component<any, any> {
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
            <StyledMore>
                <StyledMoreButton
                    onClick={this.toggleMenu}
                >
                    {MoreIcon}
                </StyledMoreButton>

                {showMenu && (
                    <ButtonMoreMenu
                        content={content}
                        toggleMenu={this.toggleMenu}
                        toggleShow={toggleShow}
                    />
                )}
            </StyledMore>
        );
    }

    private toggleMenu = () => {
        this.setState((prevState: any) => ({
            showMenu: !prevState.showMenu,
        }));
    }
}


export default ButtonMore;
