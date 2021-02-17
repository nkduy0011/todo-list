import React, { Component } from 'react';

import PropTypes from 'prop-types';
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

ListItem.propTypes = {
    item: PropTypes.shape({
        item: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    }),
    onClick: PropTypes.func,
    onDel: PropTypes.func
}

export default ListItem