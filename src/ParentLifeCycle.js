import React, { PureComponent } from 'react'
import ChildLifeCycle from './childLifeCycle'

class ParentLifeCycle extends PureComponent {
    constructor(props) {
        console.log("constructor of parent")
        super(props)

        this.state = {
           name:'parent lifecycle' 
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps of parent")
        return null;
      }
      setState1=(name1)=>{
          this.setState({
              name:name1
          })
      }

    render() {
        console.log("render of parent")

        return (
            <div><div>{this.state.name}</div><div><ChildLifeCycle name={"parent's prop"} changePState={this.setState1}></ChildLifeCycle></div></div>
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