import styled from 'styled-components';



export const StyledLegacyVolume = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;


export const StyledVolumeIcon: any = styled.div`
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

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
        background-color: hsla(0, 0%, 30%, 0.3);
    }
`;


export const StyledVolumeSlider = styled.div`
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
    height: 100%;
`;
