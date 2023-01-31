import React, {Component,PureComponent} from 'react';
function MyFunComponent(props){
    return <h3>I am functional component, {props.name}, and here is my child component --- &#62; {props.children}</h3>
}

class MyClassComponent extends Component{
    constructor(){
        super();
        this.state={message:"hello this is class state", count:0}
    }
    change(){
        // this.setState({message:'I am click '+this.state.count,count:this.state.count+1},()=>{console.log(this.state.message+' '+this.state.count)});
        this.setState((prevState,props)=>({message:'I am click '+this.state.count,count:prevState.count+1}),()=>{console.log(this.state.message+' '+this.state.count)});

        console.log(this.state.message+' '+this.state.count)
    }
    changeFive(){
        this.change();
        this.change();
        this.change();
        this.change();
        this.change();
    }
    render(){
        return (<><h2>I am class component, {this.props.name}</h2>
        <button onClick={()=>this.changeFive()}>{this.state.message}</button>
        {true}
        </>);
    }
}

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
       
      </Repeat>
    );
  }











export {MyClassComponent,MyFunComponent,ListOfTenThings,Repeat};