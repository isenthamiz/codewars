import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

export default function (WrappedComponent) {
    class Authenticate extends React.Component {

        constructor(props) {
            super(props);
        }

        render() {
            if(!this.props.token) {
                return <Redirect to="/" />;
            }
            return <WrappedComponent />;
        }

    }

    function mapStateToProps(state) {
        return {
            token: state.token
        }
    }

    return connect(mapStateToProps)(Authenticate);
}