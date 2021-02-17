import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddItem.css';
import classNames from 'classnames/bind';
class AddItem extends Component{
    constructor(){
        super()
        this.state = {
            newitem :""
        }
    }
    render(){
    const {onAdd, onClick, checkAll} = this.props;
    const setText = (item) => {
        this.setState({
            newitem: item
        })
    }
    const onAddToDo = (e = {}) => {
        const text = this.state.newitem;
        if (e.key === 'Enter' && text) {
            onAdd({
                item: text,
                active: false
            })
            this.setState({
                newitem: ""
            })
        }
        
    }
    const item = this.state.newitem;
    return(
        <div className='AddItem'>
            <div className={classNames("iconcheckAll",{"checkAllactive":checkAll})}>
                <FontAwesomeIcon className="icon-checkAll" icon="chevron-down" onClick={onClick}/>
                </div>
            <input className="item-add"
            type='text'
            placeholder='Add new item'
            value = {item}
            onChange= {(e) => setText(e.target.value)}
            onKeyPress= {(e) => onAddToDo(e)}
            />
        </div>
    );
}
} 

AddItem.propTypes = {
    onAdd: PropTypes.func,
    onClick: PropTypes.func,
    checkAll: PropTypes.bool
}

export default AddItem