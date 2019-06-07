import React, { Component } from 'react';

import {
    StyledTextSelectVideoButtonItem,
    StyledTextSelectVideoButtonItemIcon,
} from './styled';



interface ITextSelectVideoButtonItemProps {
    icon: JSX.Element;
    text: string;
    atClick: (event: any) => void;
    theme: any;
}


class TextSelectVideoButtonItem extends Component<
    ITextSelectVideoButtonItemProps, any
> {
    public render() {
        const {
            icon,
            text,
            atClick,
            theme,
        } = this.props;

        return (
            <StyledTextSelectVideoButtonItem
                onClick={atClick}
            >
                <StyledTextSelectVideoButtonItemIcon
                    theme={theme}
                >
                    {icon}
                </StyledTextSelectVideoButtonItemIcon>

                <div>
                    {text}
                </div>
            </StyledTextSelectVideoButtonItem>
        );
    }
}


export default TextSelectVideoButtonItem;
