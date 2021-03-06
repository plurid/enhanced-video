import styled from 'styled-components';



export const StyledButtonMoreMenu = styled.div`
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 9999;

    ul {
        background-color: ${props => props.theme.backgroundColor};
        background: ${props => {
            const { backgroundGradient, backgroundColor } = props.theme;
            if (backgroundGradient) {
                return backgroundGradient;
            } else {
                return backgroundColor;
            }
        }};
        color: ${props => props.theme.color};

        box-shadow: 0px 0px 5px 1px hsla(220, 10%, 2%, 0.7);

        min-width: 90px;
        width: 110px;
        display: flex;
        flex-direction: column;
        list-style: none;
        user-select: none;
        border-radius: 10px;
        padding: 0;
        font-size: 13px;
        font-weight: normal;
    }

    ul li {
        min-height: 32px;
    }

    ul li:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    ul li:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    ul li:hover {
        background-color: ${props => props.theme.backgroundColorHover};
    }

    hr {
        border: none;
        border-top: 1px solid hsl(220, 2%, 55%);
        margin: 0;
    }
`;
