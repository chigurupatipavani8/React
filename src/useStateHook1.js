import React,{useState} from 'react'

function UseStateHook1() {
    const [count,setCount]=useState(0);
    const [obj,setObj]=useState({id:1,fname:'pavani',lname:'chigurupati'})
    const incF=()=>{
        for(let i=0;i<5; i++)
            setCount((prevcount)=>prevcount+1)
    }
    const [todo,addTodo]=useState([obj])
    // const [todo,addTodo]=useState([obj,
    //     {...obj, id:2}])
    console.log(todo);
        return (
           
        <div><button onClick={()=>setCount(count+1)}>button is clicked {count} times</button><br></br>
        <button onClick={incF}>button is clicked once but, count increased by {count} times</button><br></br>
        first name: <input onChange={(e)=>setObj(prevState=>{return {...prevState,fname:e.target.value,id:todo.length+1}})}></input><br></br>
        {/* last name: <input onChange={(e)=>setObj(prevState=>{return {lname:e.target.value}})}></input> */}
        last name: <input onChange={(e)=>setObj({...obj,lname:e.target.value,id:todo.length+1})}></input>
        <div>Hello {obj.fname+' '+obj.lname}</div>
        <button onClick={()=>addTodo([...todo,obj])}>ADD</button>
        <div>
        {
                todo.map((item,index)=>(
                    <div key={item.id} >
                       <p>First name = {item.fname}, Last name ={item.lname}</p> 
                    </div>
                ))
        }
        </div>
           
        
       
        </div>
    )
}

export default UseStateHook1
