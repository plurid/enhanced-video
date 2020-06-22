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

import Context from '../../../../../../services/context';



const LegacyVolume: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        videoVolume,
    } = context;

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
                    slider
                </StyledVolumeSlider>
            )}
        </StyledLegacyVolume>
    );
}


export default LegacyVolume;
