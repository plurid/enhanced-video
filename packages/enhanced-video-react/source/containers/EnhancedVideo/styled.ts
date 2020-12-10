import styled, {
    createGlobalStyle,
} from 'styled-components';



export const StyledGlobal = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
`;


export const StyledEnhancedVideo: any = styled.div`
    box-sizing: border-box;
    color: ${props => props.theme.color};
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    overflow: ${(props: any) => {
        // if (props.toggledEditable && props.imageWidth < 745) {
        //     return 'visible';
        // }
        return 'hidden';
    }};

    min-height: 50px;
    height: 100%;
    background-color: black;
    outline: none;

    video {
        user-select: none;
        pointer-events: all;
        outline: none;
        display: block;
        width: 100%;
        min-height: 50px;
    }

    a {
        text-decoration: none;
    }
`;


export const StyledEnhancedVideoNoRender = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    background-color: black;
    color: white;
`;
