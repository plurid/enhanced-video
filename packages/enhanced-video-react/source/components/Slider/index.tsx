import React, {
    useState,
} from 'react';

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
    accent?: string;
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
        accent,
    } = properties;


    /** state */
    const [mouseOver, setMouseOver] = useState(false);


    /** render */
    return (
        <StyledSlider
            theme={theme}
            hovered={mouseOver}
            accent={accent}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
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
