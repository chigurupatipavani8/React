import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import About from './routing/About'
import Admin from './routing/admin'
import ButtonNavigation from './routing/buttonNavigation'
import Home from './routing/Home'
import NavaBarc from './routing/NavaBarc'
import NestedParent from './routing/nestedParent'
import { One, Two } from './routing/nestedRouts'
import NoMatch from './routing/noMatch'
import UserDetails from './routing/userDetails'
import Users from './routing/users'
const LazyAbout=React.lazy(()=>import('./routing/About'))


function App1() {
    return (<><NavaBarc></NavaBarc>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            {/* <Route path='about' element={<About></About>}></Route> */}
            
            <Route path='about' element={<React.Suspense fallback='loading about page'>
                <LazyAbout></LazyAbout>
                </React.Suspense>}></Route>
           <Route path='navigationpage' element={<ButtonNavigation></ButtonNavigation>}></Route>
            <Route path='nested' element={<NestedParent></NestedParent>}>
                <Route index element={<One></One>}></Route>
                <Route path='one' element={<One></One>}></Route>
                <Route path='two' element={<Two></Two>}></Route>
            </Route>
            <Route path='users' element={<Users></Users>}>
                <Route path=':userid' element={<UserDetails></UserDetails>}></Route>
                <Route path='admin' element={<Admin></Admin>}></Route>
            </Route>
            <Route path='*' element={<NoMatch></NoMatch>}></Route>
        </Routes>

        
        </>
        
    )
}

export default App1
