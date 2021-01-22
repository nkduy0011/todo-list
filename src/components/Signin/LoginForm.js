import React, { Component } from 'react';
import './LoginForm.css';
class LoginForm extends Component{
    render(){
        return (
            <div className='LoginForm'>
                <p>Sign in</p>
                <form>
                    <div className="LoginForm-box"><label for="Username">Username</label><input id="Username" type="text"/></div>
                    <div className="LoginForm-box"><label for="Password">Password</label><input id="Password" type="password"/></div>
                    <div className="LoginForm-button"><a href="/">Sign in to Coders-x</a></div>
                    <div className="LoginForm-checkbox"><input type="checkbox" id="LoginForm-checkbox"/><label for="LoginForm-checkbox">Keep me signed in</label></div>
                </form>
                <div className="LoginForm-forgot">
                    <a href="/">Forgot username?</a>
                    <a href="/">Forgot password?</a>
                </div>
            </div>
        );
      }
}
export default LoginForm;