import React from 'react';
import {connect} from 'react-redux'

import {userLogout} from '../actions/login';

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.dispatch(userLogout())
    }

    render() {
        return (
            <div>
                <div className="callout-header no-padding content-block w3eden">
                    <div className="inner-content">
                        <div>
                            <span className="hs-cta-wrapper" >
                                <span className="hs-cta-node" data-hs-drop="true">
                                    <a className="cta_button" href="#" cta_dest_link="#">
                                        <img className="hs-cta-img" src={require('../styles/assets/ccc.jpg')} mce_noresize="1" height="329" width="100%" />
                                    </a>
                                </span>
                            </span>
                            <div className="custom-hubspot-header-copy centered">
                                <a href="#">
                                    <h1><div className="cta-sub-header">Welcome,</div><div className="cta-header">{ !this.props.name ? "Guest" : this.props.name}</div></h1>
                                    <p>Arm your teams with the tools to<br /> become Champion of <i>CODE WAR</i>.</p>
                                    <br />
                                </a>
                                {
                                    this.props.name && <button className="btn btn-danger" onClick={this.logout}>Logout</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps)(Banner);