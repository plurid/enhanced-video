import styled from 'styled-components';



export const StyledLegacyBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background: hsla(0, 0%, 10%, 0.3);
    color: white;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3rem auto;
`;
