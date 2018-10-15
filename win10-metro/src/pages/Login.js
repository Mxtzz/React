import React, { Component } from 'react';
import '../css/style.css';
import '../css/login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                {/* <div className="filterBg"></div> */}
                <div className="loginMain">
                    <div className="loginContainer">
                        <div className="headIcon">
                            <img className="headIconImg" src={require('../images/headIcon.jpeg')} alt="" />
                        </div>
                        <div className="loginForm">
                            <input className="username ym-inputText" type="text" placeholder="PIN" />
                            <br />
                            <input className="password ym-inputText" type="password" />
                        </div>
                        <a href="" className="ym-link" >我忘记了我的PIN</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
