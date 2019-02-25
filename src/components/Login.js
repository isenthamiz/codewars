import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
            loading: false
        }
        this.onFormClick = this.onFormClick.bind(this);
    }

    onFormClick(e) {
        e.preventDefault();
        this.setState({loading: true});
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {
            email,
            password
        };

        axios.post('/api/auth/login', JSON.stringify(data)).then((res) => {
            this.setState(()=>{
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
            this.setState({loading: false});
            this.props.dispatch(userLogin(loginData, true));
            this.props.onLoginClick();
        }).catch((err) => {
            this.setState(()=>{
                return {
                    error: err,
                    loading: false
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
                    {this.state.error && <div class="alert alert-danger" role="alert">Invalid Username / Password !</div>}
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" id="login-btn">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default connect()(Login);