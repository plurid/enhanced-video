import React, {
    useContext,
} from 'react';

import {
    StyledCover,
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
        videoTime,
    } = context;

    if (!cover) {
        return (<></>);
    }

    if (videoTime !== 0) {
        return (<></>);
    }


    return (
        <StyledCover>
            <img
                src={cover}
                alt="enhanced video cover"
            />
        </StyledCover>
    );
}


export default Cover;
