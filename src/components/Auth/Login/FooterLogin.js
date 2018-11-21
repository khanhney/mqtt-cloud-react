import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class FooterLogin extends Component {
    render() {
        return (
            <Fragment>
                <div className="m-t-40 text-center">
                    <p>Bạn Chưa Có Tài Khoản ? <Link to="/sign-up" className="text-primary">Đăng Ký Ngay</Link></p>
                    <p>© 2018 KoF. Phát triển <i className="mdi mdi-heart text-danger" /> bởi 
                        <a style={{ marginLeft: 3 }} href='https://ungdungthongminh.vn'>ungdungthongminh.vn</a>
                    </p>
                </div>
            </Fragment>
        );
    }
}


// FooterLogin.propTypes = propTypes;


export default FooterLogin;
