import React, { Component } from 'react';
import './MenuItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
class MenuItem extends Component{
    render(){
        const { item, onClick } = this.props;
        return(
            <div className={classNames("MenuItem",{
                'MenuItem-active': item.active 
            })} onClick={onClick} >
                <FontAwesomeIcon className="MenuItem-icon" icon={item.icon} />
                <div className="MenuItem-title">{item.title}</div>
            </div>
        );
    }
}
export default MenuItem;