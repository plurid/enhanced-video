import styled from 'styled-components';



export interface IStyledLegacyBar {
    show: boolean;
}

export const StyledLegacyBar = styled.div<IStyledLegacyBar>`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background: hsla(0, 0%, 10%, 0.3);
    color: white;
    transition: transform 150ms linear;

    transform: ${
        ({
            show,
        }: IStyledLegacyBar) => {
            if (show) {
                return 'initial';
            }

            return 'translateY(2.2rem)';
        }
    };

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3rem auto;
`;
