import React, { Component } from 'react';
import './LoginHeader.css';
import logo from '../../Header-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class LoginHeader extends Component{
    render(){
        return (
            <div className="LoginHeader">
                <a className="Header-goback" href="/"><FontAwesomeIcon icon="arrorleft" /> Go back</a>
                <img className="Header-logo" src={logo} alt = "Coderx-logo"/>
                <a href="/" className="Header-button">Sign up</a>
            </div>
        );
      }
}

export default LoginHeader;