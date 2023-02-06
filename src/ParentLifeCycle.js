import React, { PureComponent } from 'react'
import ChildLifeCycle from './childLifeCycle'

class ParentLifeCycle extends PureComponent {
    constructor(props) {
        console.log("constructor of parent")
        super(props)

        this.state = {
           name:'parent lifecycle' ,
           show:true
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps of parent")
        return null;
      }
      setState1=(name)=>{
          this.setState({
              name:name
              
          })
          console.log("hello1",this.state)

      }
      shouldComponentUpdate() {
          console.log("shouldComponentUpdate of parent")
        return true;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate of parent")
        return null;
      }
      componentDidUpdate() {
        console.log("componentDidUpdate of parent")
      }
      componentWillUnmount() {
        console.log("ComponentWillUnmounted of parent");
      }
    render() {
        console.log("render of parent")

        return (
            <div><div>{this.state.name}</div><div>{this.state.show && <ChildLifeCycle name={"parent's prop"} changePState={this.setState1}></ChildLifeCycle>}</div>
            <div><button onClick={()=>{this.setState({show:false})}}> remove child</button></div>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount of parent")

    }
}

export default ParentLifeCycle

// call of lifecycle method at mounting phase

// constructor of parent
// getDerivedStateFromProps of parent
// render of parent
// constructor of child
// getDerivedStateFromProps of child
// render of child
// componentDidMount of child
// componentDidMount of parent