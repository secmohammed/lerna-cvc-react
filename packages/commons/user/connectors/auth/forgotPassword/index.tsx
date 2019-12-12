//@ts-ignore
import React from 'react';
import ForgotPasswordController from '../../../controllers/auth/login';

export default (WrappedComponent: React.ComponentType<{ props: any }>) => (
    <ForgotPasswordController>
        {(props: any) => {
            return (<WrappedComponent {...props} />)
        }}
    </ForgotPasswordController>
);