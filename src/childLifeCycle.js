import React, { Component } from 'react'

class ChildLifeCycle extends Component {

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
      changechildState=()=>{
        this.props.changePState("from child")
        console.log("hello1")
      }
      shouldComponentUpdate() {
        console.log("shouldComponentUpdate of child")
      return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate of child")
        return null;

      }
      componentDidUpdate() {
        console.log("componentDidUpdate of child")
      }
      componentWillUnmount() {
        console.log("ComponentWillUnmounted of child");
      }
    render() {
        console.log("render of child"+this.state.name)

        return (
            <div><div>{this.state.name}</div>
            <div>{this.state.name1}</div>
            <button onClick={this.changechildState}>click me</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount of child")

    }
}

export default ChildLifeCycle