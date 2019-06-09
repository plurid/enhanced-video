import styled from 'styled-components';



export const StyledTimescrollView = styled.div`
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul li {
        margin: 20px;
        user-select: none;
        padding: 0 40px;
    }
`;


export const StyledTimescrollViewContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    height: 100%;
    display: grid;
    align-items: center;
`;
