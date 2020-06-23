import styled from 'styled-components';



export const StyledDrawer = styled.div`
`;


export const StyledDrawerTitle = styled.div`
    font-size: 0.9rem;
    user-select: none;
    cursor: pointer;
    padding: 5px 10px;
    text-align: left;

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`;


export const StyledDrawerExpansion = styled.div`
    background-color: hsla(0, 0%, 10%, 0.3);
`;
