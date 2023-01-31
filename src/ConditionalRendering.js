import React, { PureComponent } from 'react'

class ConditionalRendering extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLogIn:true
        }
    }

    render() {
    //    if(this.state.isLogIn){
    //        return( <div>welcome pavani</div>)
    //    }
    //    else{
    //        return( <div>welcome guest</div>)
    //    }


    //==========================================



        // let message;
        // if(this.state.isLogIn){
        //     message=<div>welcome pavani1</div>
        // }
        // else{
        //     message=<div>welcome guest1</div>
        // }
        // return(message);



        //==============================

        // return( this.state.isLogIn?<div>welcome pavani2</div>:<div>welcome guest2</div>)


        //=====================================

        return(this.state.isLogIn && <div>welcome pavani3</div>)

    }
}

export default ConditionalRendering