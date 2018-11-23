import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/login';
import FormLogin from '../../components/Auth/Login/FormLogin';
import HeadLogin from '../../components/Auth/Login/HeaderLogin';
import FooterLogin from '../../components/Auth/Login/FooterLogin';

const propTypes = {
    auth: PropTypes.object.isRequired,
    loginAuth: PropTypes.func.isRequired
};

class LoginContainer extends Component {
    state = {
        isAuth: false,
        username: ''
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.auth.authenticated !== undefined && nextProps.auth.authenticated !== prevState.isAuth) {
            return {
                isAuth: nextProps.auth.authenticated
            }
        }
        // console.log(nextProps)
        if (nextProps.location.state !== undefined && nextProps.location.state.username !== prevState.username) {
            return {
                username: nextProps.location.state.username
            }
        }

        return null;
    }

    _onLogin = (username, password) => {
        this.props.loginAuth(username, password, this.props.history);
    }

    _showForm = () => {
        return <FormLogin username={this.state.username} login={(username, password) => this._onLogin(username, password)} />
    }

    componentDidUpdate(prevProps, prevState) {
        const { isAuth } = this.state;
        if (isAuth) {
            const { history } = this.props;
            history.push('/instance');
        }
    }


    render() {

        return (
            <Fragment>
                {/* Begin page */}
                <div className="wrapper-page">
                    {/* Headlogin */}
                    <HeadLogin showForm={this._showForm()} />

                    {/* FooterLogin */}
                    <FooterLogin />
                </div>{/* jQuery  */}

            </Fragment>
        );
    }
}


LoginContainer.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginAuth: (username, password, history) => {
            dispatch(loginRequest(username, password, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
