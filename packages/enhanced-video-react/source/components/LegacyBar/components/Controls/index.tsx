import React, {
    useContext,
} from 'react';

import {
    PluridIconFrame,
} from '@plurid/plurid-icons-react';

import {
    StyledLegacyControls,
    StyledLegacyControlsLeft,
    StyledLegacyControlsRight,

    StyledPlay,
    StyledTime,
    StyledFullscreen,
} from './styled';

import PlayIcon from '../../../../assets/icons/play-icon';
import PauseIcon from '../../../../assets/icons/pause-icon';

import LegacyVolume from './components/Volume';
import LegacyMore from './components/More';

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

        playVideo,
        pauseVideo,

        toggleFullscreen,
    } = context;


    /** computed */
    const durationTimeString = formatTimeString(videoDuration);
    const {
        hours: durationTimeHours,
        format: durationTimeFormat,
    } = durationTimeString;

    const currentTimeFormat = formatTimeString(
        videoTime,
        true,
        durationTimeHours,
    ).format;


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

                <LegacyVolume />
            </StyledLegacyControlsLeft>

            <StyledLegacyControlsRight>
                <StyledFullscreen
                    onClick={() => toggleFullscreen()}
                >
                    <PluridIconFrame />
                </StyledFullscreen>

                <LegacyMore />
            </StyledLegacyControlsRight>
        </StyledLegacyControls>
    );
}


export default LegacyControls;
