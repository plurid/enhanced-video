import React, { Component } from 'react';

import {
    StyledButtonItem,
    StyledButtonItemIcon,
} from './styled';



interface IButtonItemProps {
    icon: JSX.Element;
    text: string;
    atClick: (event: any) => void;
    theme: any;
}


class ButtonItem extends Component<
    IButtonItemProps, any
> {
    public render() {
        const {
            icon,
            text,
            atClick,
            theme,
        } = this.props;

        return (
            <StyledButtonItem
                onClick={atClick}
                theme={theme}
            >
                <StyledButtonItemIcon
                    theme={theme}
                >
                    {icon}
                </StyledButtonItemIcon>

                <div>
                    {text}
                </div>
            </StyledButtonItem>
        );
    }
}


export default ButtonItem;
