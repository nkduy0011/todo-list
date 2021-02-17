import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div className = 'Header'>
                <span>Profolio Perfomance</span>
                <div className = 'Header-btn'><a href="/">View all</a></div>
            </div>
        )
    }
}

export default Header