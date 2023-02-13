import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigation=useNavigate()
    return (<><div>home page</div>
    <button onClick={()=>navigation('navigationpage')}>page</button>
    </>
        
    )
}

export default Home
