import styled from 'styled-components';



export const StyledLegacyControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    font-size: 0.8rem;

    svg {
        width: 0.8rem;
        height: 0.8rem;
        fill: white;
    }
`;


export const StyledLegacyControlsLeft = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;


export const StyledLegacyControlsRight = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;


export const StyledPlay = styled.div`
    padding: 0 0.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;

    :hover {
        background: hsla(0, 0%, 30%, 0.3);
    }
`;


export const StyledTime = styled.div`
    padding: 0 0.6rem;
    user-select: text;
`;


export const StyledFullscreen = styled.div`
    padding: 0 0.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;

    :hover {
        background: hsla(0, 0%, 30%, 0.3);
    }
`;
