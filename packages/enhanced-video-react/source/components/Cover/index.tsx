import React, {
    useContext,
} from 'react';

import {
    StyledCover,
    StyledCoverPlay,
} from './styled';

import Context from '../../services/context';



const Cover: React.FC<any> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        cover,
        CoverPlay,
        videoTime,

        initialPlay,
        setInitialPlay,

        playVideo,
    } = context;

    if (videoTime !== 0) {
        return (<></>);
    }

    if (initialPlay) {
        return (<></>);
    }

    const coverPlay = CoverPlay
        ? (
            <StyledCoverPlay
                onClick={() => {
                    setInitialPlay(true);
                    playVideo();
                }}
            >
                <CoverPlay />
            </StyledCoverPlay>
        ) : (
            <></>
        );

    if (!cover && CoverPlay) {
        return (
            <>
                {coverPlay}
            </>
        );
    }

    if (!cover) {
        return (<></>);
    }


    /** render */
    return (
        <>
            <StyledCover>
                <img
                    src={cover}
                    alt="enhanced video cover"
                />
            </StyledCover>

            {coverPlay}
        </>
    );
}


export default Cover;
