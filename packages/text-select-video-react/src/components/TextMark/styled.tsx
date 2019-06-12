import styled from 'styled-components';



export const StyledTextMark: any = styled.div`
    position: absolute;
    height: 100%;
    border-left: 1px solid hsla(220, 90%, 90%, 0.8);
    border-right: 1px solid hsla(220, 90%, 90%, 0.8);

    background-color: ${(props: any) => {
        if (props.type === 'frame') {
            return 'hsla(220, 90%, 40%, 0.8)';
        }

        return 'hsla(300, 90%, 40%, 0.8)';
    }};
    left: ${(props: any) => {
        return props.start + '%';
    }};
    width: ${(props: any) => {
        const width = props.end - props.start;
        return width + '%';
    }};
`;
