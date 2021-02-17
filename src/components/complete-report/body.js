import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
    render(){
        const render = this.props.children;
        return(
            <div className = 'Body'>
                {render}
            </div>
        )
    }
}

Body.propTypes = {
    children: PropTypes.array.isRequired
}

export default Body