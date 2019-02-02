import React from 'react';
import Login from './Login';

const openLoign = {top: '0px'};
const closeLogin = {top: '-370px'};


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginbtn: false
        }
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick() {

        this.setState((prevState)=>{
            return {
                loginbtn: !prevState.loginbtn
            }
        })

    }

    render() {
        return (
            <div className="fixed-header shadow">
                <header id="header">
                    <div className="row">
                        <div className="header-contact-form-slide-container" style={ this.state.loginbtn ? openLoign : closeLogin }>
                            <div className="header-contact-form-container">
                                <Login />
                            </div>
                            <div className="header-contact-link closed shadow" onClick={this.onLoginClick}>
                                
                            </div>
                        </div>
                    </div>
                    <div id="bottomheader" className="row">
                        <div className="col">
                            <strong className="logo">
                                <a href="" />
                            </strong>
                        </div>
                        <div className="col">
                            <ul id="nav">
                                <li className="dashboard">
                                    <a href="">Dashbaord</a>
                                </li>
                                <li className="about">
                                  <a href="">About</a>
                                </li>
                                <li className="contact">
                                <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </header>
            </div>
        )
    }
}