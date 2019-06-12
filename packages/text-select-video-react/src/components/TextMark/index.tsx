import React, { Component } from 'react';

import {
    StyledTextMark,
} from './styled';




class TextMark extends Component<
    any, any
> {
    state = {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    public render() {
        const {
            type,
            start,
            end,
        } = this.props;

        return (
            <StyledTextMark
                type={type}
                start={start}
                end={end}
            >
            </StyledTextMark>
        );
    }
}


export default TextMark;
