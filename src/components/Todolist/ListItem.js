import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListItem.css';
import classNames from 'classnames/bind';
class ListItem extends Component {
    render(){
        const { item, onClick ,onDel } = this.props;
        return(
            <div className='ListItem'>
                <div>
                    { !item.active && <FontAwesomeIcon className="icon-check" icon={['far','circle']} onClick={onClick}/>}
                    { item.active && <FontAwesomeIcon className="icon-checked" icon={['far','check-circle']} onClick={onClick}/>}
                    <div className={classNames("item",{"active":item.active})} >{item.item}</div>
                </div>
                <FontAwesomeIcon className="icon-del" icon="times" onClick={onDel}/>
            </div>
        );
    }
}

export default ListItem