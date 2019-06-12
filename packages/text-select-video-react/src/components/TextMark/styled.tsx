import styled from 'styled-components';



export const StyledTextMark: any = styled.div`
    position: absolute;
    height: 100%;
    z-index: 110;


    border-left: 1px solid ${(props: any) => {
        if (props.dragType === 'leftHandle') {
            return 'black';
        }

        return 'hsla(220, 90%, 90%, 0.8)';
    }};
    border-right: 1px solid ${(props: any) => {
        if (props.dragType === 'rightHandle') {
            return 'black';
        }

        return 'hsla(220, 90%, 90%, 0.8)';
    }};
    cursor: ${(props: any) => {
        if (props.dragging) {
            return 'grabbing';
        }

        return 'grab';
    }};
    background-color: ${(props: any) => {
        if (props.type === 'frame' && props.dragType !== 'allHandle') {
            return 'hsla(220, 90%, 40%, 0.8)';
        }

        if (props.type === 'frame' && props.dragType === 'allHandle') {
            return 'hsla(220, 90%, 50%, 0.8)';
        }

        if (props.type === 'sequence' && props.dragType !== 'allHandle') {
            return 'hsla(300, 90%, 40%, 0.8)';
        }

        if (props.type === 'sequence' && props.dragType === 'allHandle') {
            return 'hsla(300, 90%, 50%, 0.8)';
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
