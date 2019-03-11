import React from 'react';
import Login from './Login';
import withErrorHandler from './errorHandler/withErrorHandler';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class Header extends React.Component {
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
                        <div className= { this.state.loginbtn ? "header-contact-form-slide-container open-login" : "header-contact-form-slide-container close-login" }>
                            <div className="header-contact-form-container">
                                <Login onLoginClick={this.onLoginClick} />
                            </div>
                            <div className = {!this.props.isLoggedIn ? "header-contact-link closed shadow-sm" : "header-contact-link closed shadow-sm login-button-disable"}  onClick={this.onLoginClick}>
                                
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
                                    <Link to="/">Dashbaord</Link>
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

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Header);