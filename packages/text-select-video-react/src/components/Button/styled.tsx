import styled from 'styled-components';



export const StyledButtonItem: any = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    background: ${(props: any) => {
        const {
            backgroundGradient,
            backgroundColor,
            backgroundColorSecondary,
        } = props.theme;

        if (backgroundGradient) {
            return backgroundGradient;
        }

        if (props.pressed) {
            return backgroundColorSecondary;
        }

        return backgroundColor;
    }};
    box-shadow: ${(props: any) => {
        if (props.pressed) {
            return 'inset 0px 3px 3px hsla(220, 5%, 5%, 0.8)';
        }
        return '0px 0px 4px 0px hsla(220, 5%, 5%, 0.6)';
    }};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;
    height: 32px;
    min-width: 190px;
    border-radius: 20px;
    padding: 7px 10px;
    transition: box-shadow 150ms linear;

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    :active {
        box-shadow: 0px 0px 1px 0px hsla(220, 5%, 5%, 0.2);
    }
`;

export const StyledButtonItemIcon = styled.div`
    height: 14px;
    width: 14px;
    margin-right: 8px;
    display: grid;
    place-content: center;
    text-align: center;

    svg {
        width: 14px;
        height: 14px;
        fill: ${props => props.theme.color};
    }
`;
