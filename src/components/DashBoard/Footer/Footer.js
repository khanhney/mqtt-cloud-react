import React, { Component, Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="footer">© 2018 Lexa -
                    <span className="d-none d-sm-inline-block">Crafted with
                    <i className="mdi mdi-heart text-danger" /> by Themesbrand</span>.
                </footer>
            </Fragment>
        );
    }
}

export default Footer;
