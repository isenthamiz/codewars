import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import withErrorHandler from './errorHandler/withErrorHandler';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

import { userLogin } from '../actions/login';

const override = css`
position: fixed;
border: 1px solid $theme-green;
left: 47%;
top:20%;
box-sizing: border-box;
z-index: 500;
`;

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            email: '',
            password: ''
        }
        this.onFormClick = this.onFormClick.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginMessage = this.loginMessage.bind(this);
    }

    loginMessage() {
        return (
            <div>
                <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{min_height: "200px"}}>
                    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src="..." className="rounded mr-2" alt="..." />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleEmail(e) {
        const email = e.target.value;
        this.setState({ email });
    }

    handlePassword(e) {
        const password = e.target.value;
        this.setState({ password });
    }

    onFormClick(e) {
        e.preventDefault();
        this.setState({ loading: true });
        const email = (e.target.email.value).toLowerCase();
        const password = e.target.password.value;

        const data = {
            email,
            password
        };

        axios.post('/api/auth/login', JSON.stringify(data)).then((res) => {
            this.setState(() => {
                return {
                    error: null
                }
            })
            const data = res.data;
            console.log(data);
            const loginData = {
                userId: data.id,
                name: data.name,
                quizohilic: data.quizohilic,
                codingame: data.codingame,
                cfc: data.cfc,
                language: data.group,
                token: data.token
            }
            console.log(loginData);
            this.setState({ loading: false, username: '', password: '' });
            this.props.dispatch(userLogin(loginData, true));
            this.props.onLoginClick();
        }).catch((err) => {
            this.setState(() => {
                return {
                    error: err,
                    loading: false,
                    username: '',
                    password: ''
                }
            })
        })

    }

    render() {
        return (
            <div>
                {this.state.loading && <div className='login-loading'><h4>Signing In ... </h4></div>}
                <div className="login-form">


                    <form onSubmit={this.onFormClick}>
                        {this.state.error && <p>Invalid Username / Password</p>}
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleEmail} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                        </div>
                        <button type="submit" id="login-btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(withErrorHandler(Login, axios));