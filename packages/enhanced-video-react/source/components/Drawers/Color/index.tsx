import React, {
    useContext,
} from 'react';

import {
    PluridIconRotate,
} from '@plurid/plurid-icons-react';

import {
    colorsSliders,
    COLOR_SLIDER_NAMES,
    COLOR_VALUES_DEFAULTS,
} from '../../../data/constants/colors';

import Drawer from '../../Drawer';

import ButtonCheckmark from '../../UI/ButtonCheckmark';
import SliderItem from '../../UI/SliderItem';
import ButtonItem from '../../UI/ButtonItem';

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

        videoColorsInvert,
        setVideoColorsInvert,

        defaultColorsToggled,
        toggleDefaultColors,
        resetToDefaultColors,

        expandColorDrawer,
        setExpandColorDrawer,
    } = context;


    /** handlers */


    /** render */
    return (
        <Drawer
            title="Color"
            expand={expandColorDrawer}
            toggleExpand={() => setExpandColorDrawer((expand: any) => !expand)}
            theme={theme}
        >
            <ul>
                <li>
                    <ButtonCheckmark
                        theme={theme}
                        toggle={() => setVideoColorsInvert((invert: any) => !invert)}
                        text="Invert Colors"
                        checked={videoColorsInvert}
                    />
                </li>

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

                <li>
                    <ButtonCheckmark
                        theme={theme}
                        toggle={() => toggleDefaultColors()}
                        text="Toggle Defaults"
                        checked={defaultColorsToggled}
                    />
                </li>

                <li>
                    <ButtonItem
                        theme={theme}
                        atClick={resetToDefaultColors}
                        icon={(
                            <PluridIconRotate />
                        )}
                        text="Reset to Defaults"
                    />
                </li>
            </ul>
        </Drawer>
    );
}


export default DrawerColor;
