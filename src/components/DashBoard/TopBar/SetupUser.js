import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { clearToken } from '../../../actions/login';
import { connect } from 'react-redux';


class SetupUser extends Component {

	_onLogout = () => {
		return this.props.logout();
	}

	render() {
		return (
			<Fragment>
				<li className="dropdown notification-list">
					<div className="dropdown notification-list nav-pro-img">
						{/* eslint-disable-next-line */}
						<a className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"><img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" /></a>
						<div className="dropdown-menu dropdown-menu-right profile-dropdown">
							{/* eslint-disable-next-line */}
							{/* item*/}<a className="dropdown-item" href="#"><i className="mdi mdi-account-circle m-r-5" /> Profile</a> <a className="dropdown-item" href="#"><i className="mdi mdi-wallet m-r-5" /> My Wallet</a> <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings m-r-5" /> Settings</a> <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline m-r-5" /> Lock screen</a>
							{/* eslint-disable-next-line */}
							<div className="dropdown-divider" />
							<Link className="dropdown-item text-danger" to='/login' onClick={this._onLogout}>
								<i className="mdi mdi-power text-danger" /> Logout</Link>
						</div>
					</div>
				</li>
			</Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logout: () => {
			dispatch(clearToken())
		}
	}
}

export default connect(null, mapDispatchToProps)(SetupUser);
