import styled from 'styled-components';



export const StyledLegacyMoreContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`;


export const StyledLegacyMoreIcon = styled.div`
    padding: 0 0.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;

    :hover {
        background: hsla(0, 0%, 30%, 0.3);
    }
`;


export const StyledLegacyMoreMenu = styled.div`
    position: absolute;
    width: 150px;
    height: 200px;
    top: calc(-200px - 0.3rem);
    right: 0;
    background-color: hsla(0, 0%, 30%, 0.3);
`;
