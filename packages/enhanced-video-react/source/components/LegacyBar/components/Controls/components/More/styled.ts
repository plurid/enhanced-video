import styled from 'styled-components';



export const StyledLegacyMoreContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`;


export const StyledLegacyMoreIcon: any = styled.div`
    padding: 0 0.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;

    background-color: ${
        ({
            active,
        }: any) => {
            if (active) {
                return 'hsla(0, 0%, 30%, 0.3)';
            }

            return 'initial';
        }
    };

    :hover {
        background: hsla(0, 0%, 30%, 0.3);
    }
`;


export const StyledLegacyMoreMenu = styled.div`
    position: absolute;
    width: 150px;
    height: 200px;
    top: calc(-200px - 0.3rem);
    right: 0;
    background-color: hsla(0, 0%, 30%, 0.3);
`;
