import React, {
    useContext,
    useState,
} from 'react';

import {
    StyledLegacyVolume,
    StyledVolumeIcon,
    StyledVolumeSlider,
} from './styled';

import VolumeHighIcon from '../../../../../../assets/icons/volume-high-icon';
import VolumeMiddleIcon from '../../../../../../assets/icons/volume-middle-icon';
import VolumeLowIcon from '../../../../../../assets/icons/volume-low-icon';
import VolumeMutedIcon from '../../../../../../assets/icons/volume-muted-icon';

import Slider from '../../../../../Slider';

import Context from '../../../../../../services/context';



const LegacyVolume: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        videoVolume,
        handleVideoVolume,

        accent,
    } = context;


    /** computed */
    const VideoVolumeIcon = videoVolume == 0
        ? VolumeMutedIcon
        : videoVolume < 0.7
            ? VolumeLowIcon
            : videoVolume < 1.3
                ? VolumeMiddleIcon
                : VolumeHighIcon;


    /** state */
    const [showSlider, setShowSlider] = useState(false);


    /** render */
    return (
        <StyledLegacyVolume>
            <StyledVolumeIcon
                active={showSlider}
                onClick={() => setShowSlider(show => !show)}
            >
                {VideoVolumeIcon}
            </StyledVolumeIcon>

            {showSlider && (
                <StyledVolumeSlider>
                    <Slider
                        value={videoVolume * 100}
                        atChange={(event) => {
                            const value = (parseInt(event.target.value) || 0) / 100;
                            handleVideoVolume(value);
                        }}
                        theme={theme}
                        min={0}
                        max={200}
                        step={1}
                        accent={accent}
                    />
                </StyledVolumeSlider>
            )}
        </StyledLegacyVolume>
    );
}


export default LegacyVolume;
