import styled from 'styled-components';



export const StyledTextVideoEditorButtonIncrement: any = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;

    input {
        background: ${(props: any) => {
            if (props.transparentUI) {
                return props.theme.backgroundColorSecondaryAlpha;
            }
            return props.theme.backgroundColorSecondary;
        }};
        color: ${props => props.theme.colorPrimary};
        height: 24px;
        width: 20px;
        border: none;
        text-align: center;
        outline: none;
        padding: 0;
        margin: 0;
    }

    /* input:last-child {
        margin-right: 4px;
        padding: 3px;
    } */

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
`;


export const StyledTextVideoEditorButtonIncrementIcon: any = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;

    svg {
        fill: ${props => props.theme.colorPrimary};
        height: 14px;
        width: 14px;
    }
`;


export const StyledTextVideoEditorButtonIncrements: any = styled.div`
    background: ${(props: any) => {
        if (props.transparentUI) {
            return props.theme.backgroundColorSecondaryAlpha;
        }
        return props.theme.backgroundColorSecondary;
    }};

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    font-size: 6px;
    justify-items: center;
    justify-content: center;
    align-items: space-between;
    grid-row-gap: 2px;
    height: 24px;
    user-select: none;
`;


export const StyledTextVideoEditorButtonIncrementButton: any = styled.div`
    color: ${props => props.theme.colorPrimary};
    background: ${(props: any) => {
        if (props.transparentUI) {
            return props.theme.backgroundColorSecondaryAlpha;
        }
        return props.theme.backgroundColorSecondary;
    }};

    width: 12px;
    height: 9px;
    cursor: pointer;
    text-align: center;
    display: grid;
    place-content: center;
    user-select: none;

    :hover {
        background-color: ${props => props.theme.backgroundColorPrimary};
    }
`;


export const StyledTextVideoEditorButtonIncrementsInputs: any = styled.div`
    background: ${(props: any) => {
        if (props.transparentUI) {
            return props.theme.backgroundColorSecondaryAlpha;
        }
        return props.theme.backgroundColorSecondary;
    }};

    user-select: none;
`;
