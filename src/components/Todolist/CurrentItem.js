import React, { Component } from 'react';
import './CurrentItem.css';
import classNames from 'classnames/bind';
class CurrentItem extends Component {
    constructor(){
        super()
        this.Current = ["All", "Active", "Complated"]
    }
    render(){
        const{itemLeft, allItem, currentFilter, onClick, onDelComplated}=this.props;
        return(
            <div className='CurrentItem'>
                <div className="item-left"><span>{itemLeft}</span> item left</div>
                {this.Current.map((item, index) => 
                <CurrentState 
                currentFilter={currentFilter} 
                key={index} 
                text={item} 
                onClick={onClick}/>)}
                {itemLeft < allItem &&< div className="bnt-clear-complated" onClick={onDelComplated}>clear complated</div>} 
            </div>
        );
    }
}
class CurrentState extends Component {
    render(){
        const{text, currentFilter,onClick}=this.props;
        const onCurrentClick = () =>{
            onClick(text)
        }
        return(
            <div className="current-state">
                    <div 
                    className={classNames("bnt-all",{"active":text === currentFilter})}
                    onClick={onCurrentClick}
                    >{text}</div>
                </div>
        );
    }
}

export default CurrentItem