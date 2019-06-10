import React, { Component } from 'react';

import {
    StyledSliderItem,
    StyledSliderType,
    StyledSliderIcon,
    StyledSliderValue,
    StyledSliderInputContainer,
} from './styled';

import Context from '../../context';



class SliderItem extends Component<
    any, any
> {
    static contextType = Context;

    constructor(props: any) {
        super(props);

        this.state = {
            hovered: false,
        };
    }

    public render() {
        const {
            hovered,
        } = this.state;

        const {
            theme,
            name,
            icon,
            iconClick,
            type,
            min,
            max,
            value,
            valueSign,
            step,
            normalized,
            toggleMenuOpaque,
        } = this.props;

        const displayValue = normalized
            ? Math.floor(value * 100)
            : value;

        return (
            <StyledSliderItem>
                <StyledSliderType>
                    {icon && (
                        <StyledSliderIcon
                            theme={theme}
                            onClick={iconClick}
                        >
                            {icon}
                        </StyledSliderIcon>
                    )}

                    <div
                        style={{
                            display: 'inline-flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyItems: 'space-between',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        {name}

                        <StyledSliderValue>
                            {displayValue}{valueSign}
                        </StyledSliderValue>
                    </div>
                </StyledSliderType>

                <StyledSliderInputContainer
                    theme={theme}
                    hovered={hovered}
                >
                    <input
                        type="range"
                        min={min}
                        max={max}
                        name={type}
                        value={value}
                        step={step}
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                        onChange={this.handleSliderInput}
                        onMouseDown={toggleMenuOpaque}
                        onMouseUp={toggleMenuOpaque}
                        onDoubleClick={this.handleDoubleClick}
                    />
                </StyledSliderInputContainer>
            </StyledSliderItem>
        );
    }

    private toggleHover = () => {
        this.setState({
            hovered: !this.state.hovered,
        });
    }

    private handleSliderInput = (event: any) => {
        const { value } = event.target;

        const {
            setValue,
        } = this.props;

        setValue(value);
    }

    private handleDoubleClick = () => {
        const {
            setValue,
            defaultValue,
        } = this.props;

        setValue(defaultValue);
    }
}


export default SliderItem;
