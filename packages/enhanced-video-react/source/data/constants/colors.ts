import {
    Slider,
} from '../interfaces';



export const COLOR_SLIDER_NAMES = {
    Contrast: 'Contrast',
    Hue: 'Hue Rotation',
    Saturation: 'Saturation',
    Brightness: 'Lightness',
};

export const COLOR_SLIDER_INPUT_DEFAULTS = {
    min: 0,
    max: 100,
    valueSign: '%',
};

export const COLOR_VALUES_DEFAULTS = {
    Invert: 0,
    Contrast: 100,
    Hue: 0,
    Saturation: 100,
    Brightness: 100,
};


export const initialPreviousVideoColors = {
    invert: 0,
    contrast: 100,
    hue: 0,
    saturation: 100,
    brightness: 100,
};


export const colorsSliders: Slider[] = [
    {
        type: 'Contrast',
        max: 200,
    },
    {
        type: 'Hue',
        min: -180,
        max: 180,
        valueSign: '°',
    },
    {
        type: 'Saturation',
        max: 200,
    },
    {
        type: 'Brightness',
        max: 200,
    },
];
