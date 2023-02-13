import React from 'react'
import { buycake } from './CakeAction'
import {connect}  from 'react-redux'
import {useSelector,useDispatch} from 'react-redux'
function CakeContainer(props) {
    // const count = useSelector('')
        return (
        <div>
            <div>no of cake left {props.numOfCake}</div>
            <button onClick={props.buycake} >Buy</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numOfCake:state.numOfCake
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buycake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
// export default CakeContainer

