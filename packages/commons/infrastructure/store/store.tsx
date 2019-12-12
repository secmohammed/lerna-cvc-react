//@ts-ignore
import React from 'react'


const { createContext } = React;
interface IState {
    user: []
}

const initialState: IState = {
    user: [],
};
export const Store = createContext<IState>(initialState);


export function StoreProvider(props: any): JSX.Element {
    //@ts-ignore
    return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
