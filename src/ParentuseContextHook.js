import React from 'react'
import ChilduseContextHook from './childuseContextHook';

export const usercontext=React.createContext();
export const usercontext1=React.createContext();

function ParentuseContextHook() {
    return (
        <>
        <usercontext.Provider value={'pavani'}>
            <usercontext1.Provider value={'chigurupati'}>
                <ChilduseContextHook></ChilduseContextHook>
            </usercontext1.Provider>
        </usercontext.Provider>
        </>
    )
}

export default ParentuseContextHook
