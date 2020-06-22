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
    overflow: scroll;
    top: calc(-200px - 0.3rem);
    right: 0;
    background-color: hsla(0, 0%, 30%, 0.3);

    ul {
        min-width: 130px;
        width: 150px;
        display: flex;
        flex-direction: column;
        list-style: none;
        user-select: none;
        border-radius: 10px;
        padding: 0;
        margin: 0;
        font-size: 13px;
    }

    ul li {
        min-height: 32px;
        color: ${props => props.theme.colorPrimary};
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
