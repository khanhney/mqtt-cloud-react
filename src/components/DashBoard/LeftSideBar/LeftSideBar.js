import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class LeftSideBar extends Component {
    render() {
        return (
            <Fragment>
                {/* ========== Left Sidebar Start ========== */}
                <div className="left side-menu">
                    <div className="slimscroll-menu" id="remove-scroll">
                        {/*- Sidemenu */}
                        <div id="sidebar-menu">
                            {/* Left Menu Start */}
                            <ul className="metismenu" id="side-menu">
                                <li><Link to="/user" className="waves-effect"><i className="mdi mdi-account-location"></i> <span>Thông Tin Người Dùng</span></Link></li>
                                <li><Link to="/instance" className="waves-effect"><i className="mdi mdi-format-list-bulleted-type"></i> <span>Instance</span></Link></li>
                            </ul>
                        </div>
                        {/* Sidebar */}
                        <div className="clearfix" />
                    </div>
                    {/* Sidebar -left */}
                </div>
                {/* Left Sidebar End */}
            </Fragment>
        );
    }
}

// LeftSideBar.propTypes = propTypes;


export default LeftSideBar;
