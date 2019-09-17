import styled from 'styled-components';



export const StyledSettingsMenu = styled.div`
    z-index: 9999;

    transition: opacity 600ms linear;

    ul {
        background-color: ${props => props.theme.backgroundColorPrimary};
        background: ${props => {
            const { backgroundGradient, backgroundColorPrimary } = props.theme;
            if (backgroundGradient) {
                return backgroundGradient;
            } else {
                return backgroundColorPrimary;
            }
        }};
        box-shadow: 0px 0px 5px 1px hsla(220, 10%, 2%, 0.7);

        min-width: 130px;
        width: 150px;
        display: flex;
        flex-direction: column;
        list-style: none;
        user-select: none;
        border-radius: 10px;
        padding: 0;
        font-size: 13px;
    }

    ul li {
        min-height: 32px;
        color: ${props => props.theme.colorPrimary};
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
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    hr {
        border: none;
        border-top: 1px solid ${props => props.theme.colorSecondary};
        margin: 0;
    }
`;
