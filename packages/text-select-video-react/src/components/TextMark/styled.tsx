import styled from 'styled-components';

import {
    LEFT_HANDLE,
    RIGHT_HANDLE,
    MOVE_MARK,
} from './constants';



export const StyledTextMark: any = styled.div`
    position: absolute;
    height: 100%;
    z-index: 110;


    border-left: 1px solid ${(props: any) => {
        if (props.dragType === LEFT_HANDLE) {
            return 'black';
        }

        return 'hsla(220, 90%, 90%, 0.8)';
    }};
    border-right: 1px solid ${(props: any) => {
        if (props.dragType === RIGHT_HANDLE) {
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
        if (props.type === 'frame' && props.dragType !== MOVE_MARK) {
            return 'hsla(220, 90%, 40%, 0.8)';
        }

        if (props.type === 'frame' && props.dragType === MOVE_MARK) {
            return 'hsla(220, 90%, 50%, 0.8)';
        }

        if (props.type === 'sequence' && props.dragType !== MOVE_MARK) {
            return 'hsla(300, 90%, 40%, 0.8)';
        }

        if (props.type === 'sequence' && props.dragType === MOVE_MARK) {
            return 'hsla(300, 90%, 50%, 0.8)';
        }

        return 'hsla(300, 90%, 40%, 0.8)';
    }};
`;


export const StyledTimeString: any = styled.div`
    font-size: 12px;
    position: relative;
    width: 100%;
`;


export const StyledStartTimeString: any = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;


export const StyledEndTimeString: any = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
