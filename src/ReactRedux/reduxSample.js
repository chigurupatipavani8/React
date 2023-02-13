
const increament='increament'
const Cincreament='Cincreament'

const redux=require('redux')
function increamentACreator(){
return{
    type:increament
}
}
function increamentCACreator(){
    return{
        type:Cincreament
    }
    }

const intialState={
    count:0,
    clickCount:0
}

const increamentReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'increament':
            return{
                ...state,
                count:state.count+1
            }
           
        default:
            return state
       
    }

}

const increamentCReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'Cincreament':
            return{
                ...state,
                clickCount:state.clickCount+1
            }
        default:
            return state
    }
}

const reducer=redux.combineReducers({
    r1:increamentReducer,
    r2:increamentCReducer
})

const RStore=redux.createStore(reducer);
console.log("intial state = ",RStore.getState())

const unSubcribe=RStore.subscribe(()=>{console.log("updated state = ",RStore.getState())})
RStore.dispatch(increamentACreator())
RStore.dispatch(increamentACreator())
RStore.dispatch(increamentCACreator())
RStore.dispatch(increamentCACreator())
RStore.dispatch(increamentCACreator())
RStore.dispatch(increamentACreator())
unSubcribe()
