import React, { Component } from 'react';
import './ex.css'
class Ex extends Component {
    constructor(){
        super();
        this.state = {
            value: 0
        }
        this.onSubClick = this.onSubClick.bind(this);
        this.onPlusClick = this.onPlusClick.bind(this);
    }
    onSubClick = () =>{
        this.setState({
            value : this.state.value -=1
        })
    }
    onPlusClick = () =>{
        this.setState({
            value : this.state.value +=1
        })
    }
    render(){
        return(
            <div className='Ex'>
                <h2>Step number</h2>
                <button onClick={this.onSubClick}>-</button>
                <span id="numberPreview"> {this.state.value} </span>
                <button onClick={this.onPlusClick}>+</button>
            </div>
        );
    }
    
}
export default Ex;