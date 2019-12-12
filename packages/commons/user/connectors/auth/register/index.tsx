//@ts-ignore
import React from 'react';
import RegisterController from '../../../controllers/auth/register/register';

export default (WrappedComponent: React.ComponentType<{ props: any }>) => (
  <RegisterController>
    {(props: any) => {
      return (<WrappedComponent {...props} />)
    }}
  </RegisterController>
);