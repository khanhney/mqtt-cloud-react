import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class FooterSignUp extends Component {
    render() {
        return (
            <Fragment>
                <div className="m-t-40 text-center">
                    <p>Tôi đã có tài khoản ? <a href="pages-login.html" className="text-primary">Đăng Nhập</a></p>
                    <p>© 2018 KoF. Phát triển <i className="mdi mdi-heart text-danger" /> bởi 
                        <a style={{ marginLeft: 3 }} href='https://ungdungthongminh.vn'>ungdungthongminh.vn</a>
                    </p>
                </div>
            </Fragment>
        );
    }
}


// FooterSignUp.propTypes = propTypes;


export default FooterSignUp;
