import React, { Component } from 'react';

import {
    StyledSpinner,
    StyledLoader
} from './styled';



class Spinner extends Component<any, any> {

    public render() {
        return (
            <StyledSpinner>
                <StyledLoader />
            </StyledSpinner>
        );
    }
}


export default Spinner;
