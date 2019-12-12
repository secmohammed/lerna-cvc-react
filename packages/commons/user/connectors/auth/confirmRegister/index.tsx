//@ts-ignore
import React from 'react';
import ConfirmRegisterController from '../../../controllers/auth/confirmRegister';

export default (WrappedComponent: React.ComponentType<{ props: any }>) => (
    <ConfirmRegisterController>
        {(props: any) => {
            return (<WrappedComponent {...props} />)
        }}
    </ConfirmRegisterController>
);