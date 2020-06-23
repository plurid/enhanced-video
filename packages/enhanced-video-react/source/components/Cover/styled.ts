import styled from 'styled-components';



export const StyledCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 97;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 98;
    }
`;


export const StyledCoverPlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 99;
`;
