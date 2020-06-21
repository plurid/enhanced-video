import React, {
    useContext,
} from 'react';

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

import Context from '../../../../services/context';



const LegacyControls: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        videoPlaying,
        playVideo,
        pauseVideo,
    } = context;


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
                    time
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
