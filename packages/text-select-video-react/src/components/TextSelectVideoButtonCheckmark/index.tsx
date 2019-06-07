import React, { Component } from 'react';

import {
    StyledTextSelectVideoButtonCheckmark,
    StyledTextSelectVideoButtonCheckmarkCheckbox,
} from './styled';



interface ITextSelectVideoButtonCheckmarkProps {
    checked: boolean;
    text: string;
    toggle: () => void;
    theme: any;
}


class TextSelectVideoButtonCheckmark extends Component<
    ITextSelectVideoButtonCheckmarkProps, any
> {
    public render() {
        const {
            text,
            toggle,
            checked,
            theme,
        } = this.props;

        return (
            <StyledTextSelectVideoButtonCheckmark
                onClick={toggle}
            >
                <div>
                    {text}
                </div>

                <StyledTextSelectVideoButtonCheckmarkCheckbox
                    theme={theme}
                    isChecked={checked}
                />
            </StyledTextSelectVideoButtonCheckmark>
        );
    }
}


export default TextSelectVideoButtonCheckmark;
