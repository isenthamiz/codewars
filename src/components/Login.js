import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="login-form">
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" id="login-btn">Submit</button>
                </form>
            </div>
        )
    }
}