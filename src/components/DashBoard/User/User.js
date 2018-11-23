import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

moment.locale('vi');

const propTypes = {
    user: PropTypes.object.isRequired,
};


class User extends Component {
    render() {
        const { user } = this.props;

        return (
            <Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row mt-10 centered">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-100">
                                <div className="card border-info mb-3">
                                    <div className="card-header"><h5>Information User</h5></div>
                                    <div className="card-body text-info">
                                        <h5 className="card-title">EMAIL : {user.email}</h5>
                                        <p className="card-text">USERNAME      : {user.username} </p>
                                        <p className="card-text">FULLNAME      : {user.fullname}  </p>
                                        <p className="card-text">STATUS        : {user.status === 1 ? <span className="badge badge-success">Đã hoạt động</span> : <span className="badge badge-dark">Không hoạt động</span>} </p>
                                        <p className="card-text">CREATE AT: {moment(user.createAt).startOf('day').fromNow()} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* container-fluid */}
                    </div>
                </div>
            </Fragment>
        );
    }
}


User.propTypes = propTypes;


export default User;
