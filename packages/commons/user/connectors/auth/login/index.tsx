//@ts-ignore
import React from 'react';
import LoginController from '../../../controllers/auth/login';

export default (WrappedComponent: React.ComponentType<{ props: any }>) => (
    <LoginController>
        {(props: any) => {
            return (<WrappedComponent {...props} />)
        }}
    </LoginController>
);