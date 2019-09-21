import styled from 'styled-components';



export const StyledTimescrollTime = styled.div`
    text-align: left;
    position: absolute;
    outline: none;
    z-index: 999;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul li {
        margin: 20px auto;
        width: 100%;
        user-select: none;
        padding: 0 40px;
    }
`;


export const StyledTimescrollTimeContainer: any = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: auto;
`;
