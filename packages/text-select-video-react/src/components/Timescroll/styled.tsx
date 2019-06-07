import styled from 'styled-components';



export const StyledTimescroll = styled.div`
    text-align: left;
`;

export const StyledTimescrollTitle = styled.div`
    padding: 7px 10px;
    /* padding-bottom: 0; */
    height: 30px;
`;

export const StyledTimescrollArea = styled.div`
    background: hsla(0, 0%, 50%, 0.15);
    height: 25px;
    width: 100%;
    cursor: pointer;
    position: relative;
    outline: none;
`;

export const StyledTimescrollViewed: any = styled.div`
    background: hsla(0, 0%, 50%, 0.5);
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
