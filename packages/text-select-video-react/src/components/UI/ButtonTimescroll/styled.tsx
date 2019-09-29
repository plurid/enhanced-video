import styled from 'styled-components';



export const StyledTimescroll = styled.div`
    text-align: left;
`;


export const StyledTimescrollTitle = styled.div`
    padding: 7px 10px;
    height: 30px;
    display: grid;
    grid-template-columns: 22px 1fr;
    justify-content: left;
    align-items: center;
    cursor: pointer;
`;


export const StyledTimescrollTitleIcon = styled.div`
    height: 14px;
    width: 14px;
    margin-right: 8px;
    display: grid;
    place-content: center;
    text-align: center;

    svg {
        width: 14px;
        height: 14px;
        fill: ${props => props.theme.colorPrimary};
    }
`;


export const StyledTimescrollArea = styled.div`
    background: ${props => props.theme.backgroundColorTertiary};
    height: 25px;
    width: 100%;
    cursor: pointer;
    position: relative;
    outline: none;
`;


export const StyledTimescrollViewed: any = styled.div`
    background: ${props => props.theme.backgroundColorPrimaryAlpha};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
`;


export const StyledTimescrollTime = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
`;
