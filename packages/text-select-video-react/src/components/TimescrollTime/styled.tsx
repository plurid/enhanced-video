import styled from 'styled-components';



export const StyledTimescrollTime = styled.div`
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
        margin: 20px auto;
        width: 70%;
        user-select: none;
        padding: 0 40px;
    }
`;


export const StyledTimescrollViewContainer: any = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: ${(props: any) => {
        if (props.textTimescroll) {
            return 'auto 200px';
        }
        return 'auto';
    }};
`;


export const StyledTimescrollTextExtractContainer = styled.div`
    background-color: hsla(220, 2%, 5%, 0.5);
    border-radius: 20px;
    padding: 10px;
    user-select: none;
    height: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    font-size: 12px;
    max-width: 550px;
    align-items: center;
    align-self: flex-start;
    justify-items: center;
    margin: 0 auto;
`;
