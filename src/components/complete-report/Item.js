import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends Component {
    render(){
        const {value, earning}  = this.props.children
        return(
            <div className = 'Item'>
                <div className = 'Item-circle'></div>
                <div className = 'Item-content'>
                    <div className = 'Item-content-title'>Cash Diposits</div>
                    <div className = 'Item-content-value'>{value}</div>
                    <div className = 'Item-content-earning'><FontAwesomeIcon icon="chevron-down"/>{earning}</div>
                </div>
            </div>
        )
    }
}

Item.propTypes = {
    children: PropTypes.shape({earning: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired})
}

export default Item