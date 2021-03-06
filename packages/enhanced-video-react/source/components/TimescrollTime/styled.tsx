import styled from 'styled-components';



export const StyledTimescrollTime = styled.div`
    text-align: left;
    position: absolute;
    outline: none;
    z-index: 999;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul li {
        margin: 20px auto;
        width: 100%;
        user-select: none;
        padding: 0 40px;
    }
`;


export const StyledTimescrollTimeContainer: any = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: auto;
`;


export const StyledControls: any = styled.div`
    margin: 0 auto;
    height: 30px;

    ul {
        display: flex;
        list-style: none;
        user-select: none;
        padding: 0;
        margin: 0;
        font-size: 13px;
        border-radius: 15px;
        transition: background-color 200ms ease-in-out;

        background-color: ${props => props.theme.backgroundColorPrimaryAlpha};
    }

    ul:hover {
        background-color: ${props => props.theme.backgroundColorPrimary};
    }

    ul li {
        margin: 0;
        padding: 0;
        height: 30px;
        width: auto;
    }

    ul li:first-child {
        margin-left: 15px;
    }

    ul li:last-child {
        margin-right: 15px;
    }

    svg {
        width: 20px;
        height: 20px;
        fill: ${props => props.theme.colorPrimary};
    }
`;


export const StyledControlsLI: any = styled.li`
    height: 30px;
    min-width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: ${(props: any) => {
        if (props.active) {
            return props.theme.backgroundColorTertiary;
        }

        return 'auto';
    }};
`;
