import styled from 'styled-components';



export const StyledTimescrollViewLine = styled.div`
    text-align: left;
    width: 70%;
    margin: 0 auto;
    height: 30px;
    position: relative;
    cursor: pointer;
    z-index: 99999;

    @media (max-width: 900px) {
        width: 100%;
    }
`;


export const StyledTimescrollViewLineViewArea = styled.div`
    background: hsla(220, 5%, 15%, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;


export const StyledTimescrollViewLineViewed = styled.div`
    background: hsla(220, 5%, 5%, 0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
`;


export const StyledTimescrollViewLineTime = styled.div`
    position: absolute;
    top: 12px;
    width: 100%;
    display: inline-flex;
    font-size: 11px;
    justify-content: space-between;
    padding: 3px;
`;


export const StyledTimescrollViewLineCurrentTime = styled.div`
    font-size: 12px;
    position: absolute;
    top: 2px;
    right: 2px;
`;


export const StyledTimescrollViewLineStartTime = styled.div`

`;


export const StyledTimescrollViewLineEndTime = styled.div`

`;
