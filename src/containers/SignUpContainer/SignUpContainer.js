import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import HeaderSignUp from '../../components/Auth/SignUp/HeaderSignUp';
import FooterSignUp from '../../components/Auth/SignUp/FooterSignUp';
import FormSignUp from '../../components/Auth/SignUp/FormSignUp';
import { signUpRequest } from '../../actions/signup';
import { connect } from 'react-redux';


const propTypes = {
	signUp: PropTypes.object.isRequired,
	signUpAuth: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};


class SignUpContainer extends Component {
	state = {
        isAuth: false,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.authenticated !== undefined && nextProps.auth.authenticated !== prevState.isAuth) {
            return {
                isAuth: nextProps.auth.authenticated
            }
        }

        return null;
    }  

	_onRegister = (username, password, email, fullname) => {
		// console.log({username, password, email, fullname})
		this.props.signUpAuth({username, password, email, fullname}, this.props.history);
	}

	_showForm = () => {
		return <FormSignUp
			register={(username, password, email, fullname) => this._onRegister(username, password, email, fullname)} />
	}

	render() {
		const { isAuth } = this.state;
        if (isAuth) {
            const { history } = this.props;
            history.push('/instance');
		}
		
		return (
			<Fragment>
				{/* Begin page */}
				<div className="wrapper-page">
					{/* Header SignUp */}
					<HeaderSignUp showForm={this._showForm()}/>

					{/* Footer SignUp */}
					<FooterSignUp />
				</div>{/* jQuery  */}

			</Fragment>
		);
	}
}


SignUpContainer.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	return {
		signUp: state.signUp,
		auth: state.auth
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		signUpAuth: (user, history) => {
			dispatch(signUpRequest(user, history))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
