import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer></SpinnerContainer>
            </SpinnerOverlay>
        ):(
            <WrappedComponent { ...otherProps}></WrappedComponent>
        )
    };
    return spinner;
};

export default WithSpinner;