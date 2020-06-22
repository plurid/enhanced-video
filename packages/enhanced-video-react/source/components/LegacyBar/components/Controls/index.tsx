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

        legacyToolbarControls,
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
                {(legacyToolbarControls.includes('ALL') || legacyToolbarControls.includes('PLAY_PAUSE'))
                && (
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
                )}

                {(legacyToolbarControls.includes('ALL') || legacyToolbarControls.includes('TIME'))
                && (
                    <StyledTime>
                        {currentTimeFormat} / {durationTimeFormat}
                    </StyledTime>
                )}

                {(legacyToolbarControls.includes('ALL') || legacyToolbarControls.includes('VOLUME'))
                && (
                    <LegacyVolume />
                )}
            </StyledLegacyControlsLeft>

            <StyledLegacyControlsRight>
                {(legacyToolbarControls.includes('ALL') || legacyToolbarControls.includes('FULLSCREEN'))
                && (
                    <StyledFullscreen
                        onClick={() => toggleFullscreen()}
                    >
                        <PluridIconFrame />
                    </StyledFullscreen>
                )}

                {(legacyToolbarControls.includes('ALL') || legacyToolbarControls.includes('MORE'))
                && (
                    <LegacyMore />
                )}
            </StyledLegacyControlsRight>
        </StyledLegacyControls>
    );
}


export default LegacyControls;
