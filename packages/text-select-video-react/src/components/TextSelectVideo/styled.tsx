import styled from 'styled-components';



export const StyledTextSelectVideo: any = styled.div`
    box-sizing: border-box;
    color: ${props => props.theme.color};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    overflow: ${(props: any) => {
        if (props.toggledEditable && props.imageWidth < 745) {
            return 'visible';
        }

        return 'hidden';
    }};

    background-color: black;

    video {
        user-select: none;
        pointer-events: all;
        outline: none;
        display: block;
        width: 100%;
        /* height: 600px; */
    }

    a {
        color: ${props => props.theme.color};
        text-decoration: none;
    }
`;
