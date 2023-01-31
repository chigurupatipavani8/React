import { PureComponent } from "react";

class MyComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message:'click me',
            count:1
        }
        this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler(){
        console.log('clicked me');
    }

    // clickHandler=()=>{
    //     this.setState({message:"clicked "+this.state.count,count:this.state.count+1},()=>{console.log(this.state.message);})
        
    // }

    render() {
        return (
            // <><button onClick={this.clickHandler.bind(this)}>{this.state.message}</button></>//using the bind function
            // <><button onClick={()=>{this.clickHandler()}}>{this.state.message}</button></>//using arrow function while calling and can be passed parameters simply compared to other approches
            <><button onClick={this.clickHandler}>{this.state.message}</button></>//binding in class constructor which is recommand and class property as arrow functions also recommended 

        
        )
    }
}

export default MyComponent