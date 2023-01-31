import React, { PureComponent } from 'react'
import Child from './child';

class Parent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            parentName:'parent'
        }
        this.greetp=this.greet.bind(this);
    }
    greet(){
        alert("hello "+this.state.parentName)
        console.log("hey")
    }

    render() {
        return (
            <Child greetp={this.greetp} />
        )
    }
}

export default Parent