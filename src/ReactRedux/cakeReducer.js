import { buy } from "./cakeType"

const initialState={
    numOfCake:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case buy:
            return{
                ...state,
                numOfCake:state.numOfCake-1
            }
        default:
            return state
    }

}

export default cakeReducer