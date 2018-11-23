import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import FormSignUp from './FormSignUp';


// const propTypes = {
//     showForm: ptf
// };


class HeaderSignUp extends Component {
    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center m-0">
                            <Link to="/sign-up" className="logo logo-admin">
                                <img src="assets/images/iotHutech.png" height={120} alt="logo" />
                            </Link>
                        </h3>
                        <div className="p-3">
                            <h4 className="text-muted font-18 m-b-5 text-center">Đăng Ký Miễn Phí</h4>
                            <p className="text-muted text-center">Đăng Ký Ngay Cloud MQTT.</p>

                            {/* Form SignUp */}
                            {/* {console.log(this.props)} */}
                            {this.props.showForm}
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}


// HeaderSignUp.propTypes = propTypes;


export default HeaderSignUp;
