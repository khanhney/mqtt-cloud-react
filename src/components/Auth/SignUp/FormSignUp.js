import React, { Component, Fragment } from 'react';
import { showToast } from '../../../utils/config-toastr';
import { checkValidateMail } from '../../../utils/check-email';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class FormSignUp extends Component {

	state = {
		txtEmail: '',
		txtUsername: '',
		txtPassword: '',
		txtFullname: ''
	}

	_onChange = e => {
		const target = e.target;
		let name = target.name;
		let value = target.value;

		this.setState({
			[name]: value
		})
	}

	_onSubmit = e => {
		e.preventDefault();
		const { txtEmail, txtUsername, txtPassword, txtFullname } = this.state;
		const checkEmail = checkValidateMail(txtEmail);
		console.log(checkEmail);
		if (checkEmail && (txtUsername.length >= 6) && (txtPassword.length >= 6) && txtFullname) {
			this.props.register(txtEmail, txtUsername, txtPassword, txtFullname);
		} else if (!checkEmail) {
			showToast('warning', 'Email không tồn tại!');
		}
	}

	render() {
		const { txtEmail, txtUsername, txtPassword, txtFullname } = this.state;
		// console.log({ txtEmail, txtUsername, txtPassword, txtFullname });
		return (
			<Fragment>
				<form className="form-horizontal m-t-30" onSubmit={this._onSubmit}>
					<div className="form-group">
						<label htmlFor="useremail">Email</label>
						<input
							type="email"
							className="form-control"
							id="useremail"
							placeholder="khanhney.dev@gmail.com"
							name='txtEmail'
							value={txtEmail}
							onChange={this._onChange} />
					</div>
					<div className="form-group">
						<label htmlFor="fullname">Họ Tên</label>
						<input
							type="text"
							className="form-control"
							id="fullname"
							placeholder="Lê Duy Khánh"
							name='txtFullname'
							value={txtFullname}
							onChange={this._onChange} />
					</div>
					<div className="form-group">
						<label htmlFor="username">Tài Khoản</label>
						<input
							type="text"
							className="form-control"
							id="username"
							placeholder="khanhney"
							name='txtUsername'
							value={txtUsername}
							onChange={this._onChange} />
					</div>
					<div className="form-group">
						<label htmlFor="userpassword">Mật Khẩu</label>
						<input
							type="password"
							className="form-control"
							id="userpassword"
							placeholder="************"
							name='txtPassword'
							value={txtPassword}
							onChange={this._onChange} />
					</div>

					<div className="form-group row m-t-20">
						<div className="col-12 text-right">
							<button className="btn btn-primary w-md waves-effect waves-light" type="submit">Đăng Ký</button>
						</div>
					</div>
					{/* <div className="form-group m-t-10 mb-0 row">
						<div className="col-12 m-t-20">
							<p className="font-14 text-muted mb-0">By registering you agree to the Lexa <a href="#" className="text-primary">Terms of Use</a></p>
						</div>
					</div> */}
				</form>
			</Fragment>
		);
	}
}


// FormSignUp.propTypes = propTypes;


export default FormSignUp;
