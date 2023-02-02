import React, { PureComponent } from 'react'

class FormHandling extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name:'pavani',
            value:'orange'
        }
        // this.nameChange=this.nameChange.bind(this);
    }
    // nameChange(event){
    //     this.setState({
    //         name:event.target.value
    //     })
    // }
    nameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    valueChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    submited=(event)=>{
        alert("form submitted");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submited}>
                    <div><input value={this.state.name} onChange={this.nameChange}></input></div>
                    <div> <select value={this.state.value} onChange={this.valueChange}>
                        <option>orange</option>
                        <option>yellow</option>
                        <option>red</option>
                    </select></div>
                    <div><input type='submit' ></input></div>
                    
                    
                   
                </form>
                <div>{this.state.name}, {this.state.value}</div>
            </div>
        )
    }
}

export default FormHandling