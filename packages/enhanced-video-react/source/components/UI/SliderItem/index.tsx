import React, {
    useState,
} from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledSliderItem,
    StyledSliderType,
    StyledSliderValue,
    StyledSliderInputContainer,
} from './styled';



export interface SliderItemProperties {
    /** required */
    value: number;
    type: string;
    sliderName: string;
    defaultValue: number;
    theme: Theme;
    handleInput: (value: number) => void;

    /** optional */
    min?: number;
    max?: number;
    valueSign?: string;
}

const SliderItem: React.FC<SliderItemProperties> = (
    properties,
) => {
    /** properties */
    const {
        value,
        type,
        sliderName,
        defaultValue,
        theme,
        handleInput,

        min,
        max,
        valueSign,
    } = properties;


    /** state */
    const [hovered, setHovered] = useState(false);


    /** handle */
    const handleDoubleClick = () => {
        handleInput(defaultValue);
    }


    /**  */
    return (
        <StyledSliderItem>
            <StyledSliderType>
                {sliderName}

                <StyledSliderValue>
                    {value}{valueSign || '%'}
                </StyledSliderValue>
            </StyledSliderType>

            <StyledSliderInputContainer
                theme={theme}
                hovered={hovered}
            >
                <input
                    type="range"
                    min={min || 0}
                    max={max || 100}
                    name={type}
                    value={value}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onChange={(event: any) => handleInput(parseInt(event.target.value))}
                    onDoubleClick={handleDoubleClick}
                />
            </StyledSliderInputContainer>

        </StyledSliderItem>
    );
}


export default SliderItem;
