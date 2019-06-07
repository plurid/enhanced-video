import styled from 'styled-components';



export const StyledTextVideoEditorButtonClick: any = styled.div`
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
