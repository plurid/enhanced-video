import React, {
    useContext,
} from 'react';

import {
} from './styled';

import {
    colorsSliders,
    COLOR_SLIDER_NAMES,
    COLOR_VALUES_DEFAULTS,
} from '../../../data/constants/colors';

import Drawer from '../../Drawer';

import SliderItem from '../../UI/SliderItem';

import Context from '../../../services/context';



const DrawerColor: React.FC<any> = (
    properties: any,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        expandColorDrawer,
        setExpandColorDrawer,
    } = context;


    /** handlers */


    /** render */
    return (
        <Drawer
            title="Color"
            expand={expandColorDrawer}
            toggleExpand={() => setExpandColorDrawer(expand => !expand)}
            theme={theme}
        >
            <ul>
                {/* <li>
                    <ButtonCheckmark
                        theme={theme}
                        toggle={() => setImageColorsInvert(invert => !invert)}
                        text="Invert Colors"
                        checked={imageColorsInvert}
                    />
                </li> */}

                {
                    colorsSliders.map(slider => {
                        const {
                            type,
                            min,
                            max,
                            valueSign,
                        } = slider;

                        const sliderValue = `videoColors${slider.type}`;
                        const handleInput = `setVideoColors${slider.type}`;

                        return (
                            <li
                                key={type}
                            >
                                <SliderItem
                                    value={(context as any)[sliderValue]}
                                    type={type}
                                    sliderName={(COLOR_SLIDER_NAMES as any)[type]}
                                    defaultValue={(COLOR_VALUES_DEFAULTS as any)[type]}
                                    theme={theme}
                                    handleInput={(value: number) => (context as any)[handleInput](value)}

                                    min={min}
                                    max={max}
                                    valueSign={valueSign}
                                />
                            </li>
                        )
                    })
                }

                {/* <li>
                    <ButtonCheckmark
                        theme={theme}
                        toggle={() => toggleDefaults()}
                        text="Toggle Defaults"
                        checked={defaultsToggled}
                    />
                </li> */}

                {/* <li>
                    <ButtonItem
                        theme={theme}
                        atClick={resetToDefaults}
                        icon={ResetIcon}
                        text="Reset to Defaults"
                    />
                </li> */}
            </ul>
        </Drawer>
    );
}


export default DrawerColor;
