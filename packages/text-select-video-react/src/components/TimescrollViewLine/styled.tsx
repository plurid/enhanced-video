import styled from 'styled-components';



export const StyledTimescrollViewLine = styled.div`
    text-align: left;
    /* width: 70%; */
    /* margin: 0 auto; */
    height: 30px;
    position: relative;
    cursor: pointer;
    z-index: 99999;
    overflow: hidden;


    /* @media (max-width: 900px) {
        width: 100%;
    } */
`;


export const StyledTimescrollViewLineViewArea: any = styled.div`
    background: hsla(220, 5%, 15%, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* padding: 0 15px; */
    overflow: hidden;

    border-top-left-radius: ${(props: any) => {
        if (props.firstLine) {
            return '15px';
        }
        return '';
    }};
    border-bottom-left-radius: ${(props: any) => {
        if (props.firstLine) {
            return '15px';
        }
        return '';
    }};

    border-top-right-radius: ${(props: any) => {
        if (props.lastLine) {
            return '15px';
        }
        return '';
    }};
    border-bottom-right-radius: ${(props: any) => {
        if (props.lastLine) {
            return '15px';
        }
        return '';
    }};
`;


export const StyledTimescrollViewLineViewed: any = styled.div`
    background: hsla(220, 5%, 5%, 0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    /* padding: 0 15px; */

    /* border-top-left-radius: ${(props: any) => {
        if (props.firstLine) {
            return '15px';
        }
        return '';
    }};
    border-bottom-left-radius: ${(props: any) => {
        if (props.firstLine) {
            return '15px';
        }
        return '';
    }};

    border-top-right-radius: ${(props: any) => {
        if (props.lastLine) {
            return '15px';
        }
        return '';
    }};
    border-bottom-right-radius: ${(props: any) => {
        if (props.lastLine) {
            return '15px';
        }
        return '';
    }}; */
`;


export const StyledTimescrollViewLineTime = styled.div`
    position: absolute;
    top: 12px;
    width: 100%;
    display: inline-flex;
    font-size: 11px;
    justify-content: space-between;
    padding: 3px;
`;


export const StyledTimescrollViewLineCurrentTime: any = styled.div`
    font-size: 12px;
    position: absolute;
    top: 2px;
    right: ${(props: any) => {
        if (props.viewedWidth < 4 && props.currentTimeHours === 0) {
            return '-34px';
        }
        if (props.viewedWidth < 5 && props.currentTimeHours !== 0) {
            return '-44px';
        }
        return '2px';
    }};
`;


export const StyledTimescrollViewLineStartTime = styled.div`
`;


export const StyledTimescrollViewLineEndTime = styled.div`
`;


export const StyledTextFrame: any = styled.div`
    position: absolute;
    height: 100%;
    background-color: hsla(220, 90%, 40%, 0.8);
    border-left: 1px solid hsla(220, 90%, 90%, 0.8);
    border-right: 1px solid hsla(220, 90%, 90%, 0.8);

    left: ${(props: any) => {
        return props.start + '%';
    }};
    width: ${(props: any) => {
        const width = props.end - props.start;
        return width + '%';
    }};
`;


export const StyledTextSequence: any = styled.div`
    position: absolute;
    height: 100%;
    background-color: hsla(300, 90%, 40%, 0.8);
    border-left: 1px solid hsla(300, 90%, 90%, 0.8);
    border-right: 1px solid hsla(300, 90%, 90%, 0.8);

    left: ${(props: any) => {
        return props.start + '%';
    }};
    width: ${(props: any) => {
        const width = props.end - props.start;
        return width + '%';
    }};
`;
