import React, { PureComponent } from 'react'

class ChildLifeCycle extends PureComponent {

    constructor(props) {
        console.log("constructor of child")
        super(props)

        this.state = {
           name:'child lifecycle' ,
           name1:'hey'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps of child"+state.name)
        // return {name:props.name};// change the state name field
        return null;
      }
      changeParentState=()=>{
        this.props.changePState("from child")
      }

    render() {
        console.log("render of child"+this.state.name)

        return (
            <div><div>{this.state.name}</div>
            <div>{this.state.name1}</div>
            <button onClick={this.changeParentState}>click me</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount of child")

    }
}

export default ChildLifeCycle