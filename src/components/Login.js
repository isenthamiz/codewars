import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {userLogin} from '../actions/login';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onFormClick = this.onFormClick.bind(this);
    }

    onFormClick(e) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const data = {
            email,
            password
        };

        axios.post('http://localhost:3000/api/auth/login',JSON.stringify(data),config).then((res)=>{
            const data = res.data;
            console.log(data);
            const loginData = {
                userId: '1234567',
                userName: 'Senthamiz Kumaran',
                roundOne: 'ACTIVATE',
                roundTwo: 'DEACTIVATE',
                roundThree: 'DEACTIVATE',
            }
            console.log(loginData);
            this.props.dispatch(userLogin(loginData, true));
            this.props.onLoginClick();
        }).catch((err)=> {
            console.log(err);
        })
        
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.onFormClick}>
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
        )
    }
}

export default connect()(Login);