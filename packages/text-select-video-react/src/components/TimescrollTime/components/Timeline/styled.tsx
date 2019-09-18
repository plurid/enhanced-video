import styled from 'styled-components';



export const StyledTimeline = styled.div`
    text-align: left;
    height: 30px;
    position: relative;
    cursor: pointer;
    z-index: 100;
    overflow: hidden;
`;


export const StyledTimelineArea: any = styled.div`
    background: hsla(220, 5%, 15%, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    overflow: hidden;

    border-top-left-radius: ${(props: any) => {
        if (props.first) {
            return '15px';
        }
        return '';
    }};
    border-bottom-left-radius: ${(props: any) => {
        if (props.first) {
            return '15px';
        }
        return '';
    }};

    border-top-right-radius: ${(props: any) => {
        if (props.last) {
            return '15px';
        }
        return '';
    }};
    border-bottom-right-radius: ${(props: any) => {
        if (props.last) {
            return '15px';
        }
        return '';
    }};
`;


export const StyledTimelineViewed: any = styled.div`
    background: hsla(220, 5%, 5%, 0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-right: 1px solid ${(props: any) => {
        if (props.viewedWidth !== 100 && props.viewedWidth !== 0) {
            return 'white';
        }
        return 'none';
    }};
    transition: width 1s linear;
    z-index: 990;
`;


export const StyledTimelineCurrentTime: any = styled.div`
    font-size: 11px;
    position: absolute;
    top: 2px;
    right: ${(props: any) => {
        if (props.viewedWidth < 7 && props.currentTimeHours === 0) {
            return '-34px';
        }
        if (props.viewedWidth < 8 && props.currentTimeHours !== 0) {
            return '-44px';
        }
        return '2px';
    }};
`;


export const StyledTimelineTime = styled.div`
    position: absolute;
    top: 17px;
    width: 100%;
    display: inline-flex;
    font-size: 10px;
    justify-content: space-between;
    padding: 0px 8px;
    color: #ddd;
`;
