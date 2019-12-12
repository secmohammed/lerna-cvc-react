//@ts-ignore
import React from 'react';
import HomeController from '../../controllers/home';

export default (WrappedComponent: React.ComponentType<{ props: any }>) => (
    <HomeController>
        {(props: any) => {
            return (<WrappedComponent {...props} />)
        }}
    </HomeController>
);