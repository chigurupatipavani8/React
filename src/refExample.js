// import { times } from 'lodash'
// import React, { PureComponent } from 'react'

// class RefExample extends PureComponent {
//     constructor(props) {
//         super(props)
//         this.inputRef=React.createRef()
        
//     }
//     componentDidMount(){
//         this.inputRef.current.focus();
//     }

//     render() {
//         return (
//             <input ref={this.inputRef}></input>
//         )
//     }
// }

// export default RefExample






// import React, { PureComponent, Component} from 'react'

// class RefExample extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.componentRef=React.createRef();
//     }
//     clickHandler=()=>{
//         this.componentRef.current.focusI();
//     }
//     render() {
//         return (<>          
//             <Child ref={this.componentRef}></Child>
//             <button onClick={this.clickHandler}>focus</button>
//             </> 
//         )
//     }
// }



// class Child extends Component {
//     constructor(props) {
//         super(props)
//         this.inputRef=React.createRef();
//     }
//     focusI(){
//         this.inputRef.current.focus();
//     }

//     render() {
//         return (
//             <input ref={this.inputRef}></input>
//         )
//     }
// }

// export default RefExample


import React, { PureComponent } from 'react'

class RefExample extends PureComponent {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        
    }
   clikHandler=()=>{
        this.inputRef.current.focus();
   }

    render() {
        return (<><Child ref={this.inputRef}></Child>
        <button onClick={this.clikHandler}>focus</button>
        </>
            
        )
    }
}

const Child=React.forwardRef((props,ref)=>{return(<input ref={ref}></input>)})

export default RefExample