import React from 'react';
import {connect} from 'react-redux';

const withErrorHandler = (WrappedComponent, axios) => {
    class ErrorHandler extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                req.headers.Authorization = `Bearer ${this.props.token}`;
                this.setState({error: null});
                console.log(req);
                return req;
            }, error => {
                console.log(error);
                this.setState({error: error});
            })

            this.resInterceptor = axios.interceptors.response.use(res => {
                console.log(res);
                return res;
            }, error => {
                console.log(error);
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            token: state.token
        }
    }

    return connect(mapStateToProps)(ErrorHandler);
}

export default withErrorHandler;