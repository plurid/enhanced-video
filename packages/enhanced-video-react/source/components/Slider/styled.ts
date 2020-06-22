import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export interface IStyledSlider {
    theme: Theme;
    hovered: boolean;
    accent?: string;
}

export const StyledSlider = styled.div<IStyledSlider>`
    display: flex;
    align-items: center;
    width: 90px;

    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        margin: 6.5px 0;
        padding: 5px 0;
        background: transparent;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-webkit-slider-thumb {
        border: 2px solid ${(props: IStyledSlider) => props.theme.colorPrimary };
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: ${(props: IStyledSlider) => {
            if (props.hovered) {
                return props.theme.colorPrimary;
            }

            if (props.accent) {
                return props.accent;
            }

            return props.theme.backgroundColorPrimary;
        }};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -6.5px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-moz-range-thumb {
        border: 2px solid ${(props: IStyledSlider) => props.theme.colorPrimary };
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: ${(props: IStyledSlider) => {
            if (props.hovered) {
                return props.theme.colorPrimary;
            }

            if (props.accent) {
                return props.accent;
            }

            return props.theme.backgroundColorPrimary;
        }};
        cursor: pointer;
    }

    input[type=range]::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    input[type=range]::-ms-fill-lower {
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-ms-fill-upper {
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-ms-thumb {
        border: 2px solid ${(props: IStyledSlider) => props.theme.colorPrimary };
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: ${(props: IStyledSlider) => {
            if (props.hovered) {
                return props.theme.colorPrimary;
            }

            if (props.accent) {
                return props.accent;
            }

            return props.theme.backgroundColorPrimary;
        }};
        cursor: pointer;
        height: 2px;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
    }

    input[type=range]:focus::-ms-fill-upper {
        background: ${(props: IStyledSlider) => props.theme.colorPrimary };
    }
`;
