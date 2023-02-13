import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function UserDetails() {
    const param=useParams()
    const [sparam,setSparam]=useSearchParams()
    const haveFilter=sparam.get('filter')==='active'

    return (<><div>given user id = {param.userid}</div>
    <button onClick={()=>setSparam({'filter':'active'})}>add filter in url</button>
    <button onClick={()=>setSparam({})}>url without filter</button>
        {haveFilter?<h1>filter added</h1>:<h1>no filter</h1>}
    </>
        
        
    )
}

export default UserDetails
