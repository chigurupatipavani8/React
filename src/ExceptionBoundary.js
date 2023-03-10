import React, { Component } from 'react'

class ExceptionBoundary extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error) {
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log("error="+error+" info="+info);
    }
    render() {
        if(this.state.hasError){
            return <div>something went wrong</div>
        }
        return this.props.children
    }
}

export default ExceptionBoundary