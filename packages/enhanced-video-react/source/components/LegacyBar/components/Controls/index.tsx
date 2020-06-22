import React, {
    useContext,
} from 'react';

// import {

// } from '@plurid/plurid-icons-react';

import {
    StyledLegacyControls,
    StyledLegacyControlsLeft,
    StyledLegacyControlsRight,

    StyledPlay,
    StyledTime,
    StyledVolume,
    StyledFullscreen,
    StyledMore,
} from './styled';

import playIcon from '../../../../assets/icons/play-icon';
import pauseIcon from '../../../../assets/icons/pause-icon';

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
    } = context;


    const durationTimeFormat = formatTimeString(videoDuration).format;
    const currentTimeFormat = formatTimeString(videoTime).format;


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
                        <>{pauseIcon}</>
                    ) : (
                        <>{playIcon}</>
                    )}
                </StyledPlay>

                <StyledTime>
                    {currentTimeFormat} / {durationTimeFormat}
                </StyledTime>

                <StyledVolume>
                    volume
                </StyledVolume>
            </StyledLegacyControlsLeft>

            <StyledLegacyControlsRight>
                <StyledFullscreen>
                    full screen
                </StyledFullscreen>

                <StyledMore>
                    more
                </StyledMore>
            </StyledLegacyControlsRight>
        </StyledLegacyControls>
    );
}


export default LegacyControls;
