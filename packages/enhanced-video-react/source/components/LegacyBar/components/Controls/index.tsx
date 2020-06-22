import React, {
    useContext,
} from 'react';

import {
    PluridIconFrame,
    PluridIconMore,
} from '@plurid/plurid-icons-react';

import {
    StyledLegacyControls,
    StyledLegacyControlsLeft,
    StyledLegacyControlsRight,

    StyledPlay,
    StyledTime,
    StyledFullscreen,
    StyledMore,
} from './styled';

import PlayIcon from '../../../../assets/icons/play-icon';
import PauseIcon from '../../../../assets/icons/pause-icon';

import VolumeHighIcon from '../../../../assets/icons/volume-high-icon';
import VolumeMiddleIcon from '../../../../assets/icons/volume-middle-icon';
import VolumeLowIcon from '../../../../assets/icons/volume-low-icon';
import VolumeMutedIcon from '../../../../assets/icons/volume-muted-icon';

import Volume from './components/Volume';

import {
    formatTimeString,
} from '../../../../services/utilities/time';

import Context from '../../../../services/context';



const LegacyControls: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        videoPlaying,
        videoDuration,
        videoTime,

        videoVolume,

        playVideo,
        pauseVideo,

        toggleFullscreen,
    } = context;


    const durationTimeFormat = formatTimeString(videoDuration).format;
    const currentTimeFormat = formatTimeString(videoTime).format;


    const VideoVolumeIcon = videoVolume == 0
        ? VolumeMutedIcon
        : videoVolume < 0.7
            ? VolumeLowIcon
            : videoVolume < 1.3
                ? VolumeMiddleIcon
                : VolumeHighIcon;


    /** render */
    return (
        <StyledLegacyControls>
            <StyledLegacyControlsLeft>
                <StyledPlay
                    onClick={() => {
                        if (videoPlaying) {
                            pauseVideo();
                        } else {
                            playVideo();
                        }
                    }}
                >
                    {videoPlaying
                    ? (
                        <>{PauseIcon}</>
                    ) : (
                        <>{PlayIcon}</>
                    )}
                </StyledPlay>

                <StyledTime>
                    {currentTimeFormat} / {durationTimeFormat}
                </StyledTime>

                <Volume />
            </StyledLegacyControlsLeft>

            <StyledLegacyControlsRight>
                <StyledFullscreen
                    onClick={() => toggleFullscreen()}
                >
                    <PluridIconFrame />
                </StyledFullscreen>

                <StyledMore>
                    <PluridIconMore />
                </StyledMore>
            </StyledLegacyControlsRight>
        </StyledLegacyControls>
    );
}


export default LegacyControls;
