import React, { Component } from 'react';

import {
    StyledButtonItem,
    StyledButtonItemIcon,
} from './styled';



interface IButtonItemProps {
    icon?: JSX.Element;
    text: string;
    atClick: (event: any) => void;
    theme: any;
    pressed?: boolean;
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
            pressed,
        } = this.props;

        return (
            <StyledButtonItem
                onClick={atClick}
                theme={theme}
                pressed={pressed}
            >
                {/* <StyledButtonItemIcon
                    theme={theme}
                >
                    {icon}
                </StyledButtonItemIcon> */}

                <div>
                    {text}
                </div>
            </StyledButtonItem>
        );
    }
}


export default ButtonItem;
