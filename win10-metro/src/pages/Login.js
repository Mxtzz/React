import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../css/style.css';
import '../css/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSlideUp: false,
            isSlide: false
        }
    }

    clickSlideUp = () => {
        this.setState({ isSlideUp: true })
    }

    render() {
        return (
            <div className="login">
                {this.state.isSlideUp === true ? null :
                    <CSSTransition
                        in={this.state.isSlide !== true}
                        timeout={1000}
                        classNames={{
                            exit: 'slideup-exit',
                            exitActive: 'slideup-exit-active',
                        }}
                        unmountOnExit
                        onExited={() => {
                            this.setState({
                                isSlideUp: true,
                            });
                            this.clickSlideUp()
                        }}
                    >
                        <div onClick={() => { this.setState({ isSlide: true }) }} className="filterBg"></div>
                    </CSSTransition>

                }
                
                <div className="loginMain">
                    <div className="loginContainer">
                        <div className="headIcon">
                            <img className="headIconImg" src={require('../images/headIcon.jpeg')} alt="" />
                        </div>
                        <p className="userDisplay">UserName</p>
                        <div className="loginForm">
                            <input className="username ym-inputText" type="text" placeholder="PIN" />
                            <br />
                            {/* <input className="password ym-inputText" type="password" /> */}
                        </div>
                        <a href="http://localhost:3000" className="forgetPin ym-link" >我忘记了我的PIN</a>
                        <br />
                        <a href="http://localhost:3000" className="loginItem ym-link" >登陆选项</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
