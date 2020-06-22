import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledSlider,
} from './styled';



export interface SliderProperties {
    /** required */
    value: number;
    atChange: (
        event: any,
    ) => void;
    theme: Theme;

    /** optional */
    min?: number;
    max?: number;
    step?: number;
}

const Slider: React.FC<SliderProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** required */
        value,
        atChange,
        theme,

        /** optional */
        min,
        max,
        step,
    } = properties;


    /** render */
    return (
        <StyledSlider
            theme={theme}
        >
            <input
                type="range"
                min={min}
                max={max}
                step={step || 1}
                value={value}
                onChange={atChange}
            />
        </StyledSlider>
    );
}


export default Slider;
