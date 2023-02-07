import React, { useContext } from 'react'
import { usercontext, usercontext1 } from './ParentuseContextHook'

// const fname=useContext(usercontext);//error
// const lname=useContext(usercontext1);//error
// React Hook "useContext" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function 
function ChilduseContextHook() {
    const fname=useContext(usercontext);
const lname=useContext(usercontext1);
    //code without useContext hook
    // return (
    //     <usercontext.Consumer>
    //        { fuser=>{
    //            return(
    //                <usercontext1.Consumer>
    //                    {
    //                        luser=>{
    //                            return(
    //                                 <div>Hello, {fuser} {luser}</div>
    //                            )
    //                        }
    //                    }
    //                </usercontext1.Consumer>
    //            )
    //         }
    //         }
    //     </usercontext.Consumer>
        
    // )
    return(
        <div> Hello, {fname} {lname}</div>
    )
}

export default ChilduseContextHook
