import styled from 'styled-components';



export const StyledTextVideoEditorButtonToggle: any = styled.div`
    background-color: ${(props: any) => {
        if (props.toggled) {
            return props.theme.backgroundColorHover;
        } else {
            return 'transparent';
        }
    }};

    cursor: pointer;
    display: grid;
    place-content: center;
    height: 100%;
    min-width: 32px;

    :hover {
        background-color: ${props => props.theme.backgroundColorHover};
    }

    svg {
        fill: ${props => props.theme.color};
        height: 14px;
        width: 14px;
    }
`;
