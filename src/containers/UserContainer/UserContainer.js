import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import User from '../../components/DashBoard/User/User';
import { connect } from 'react-redux';


const propTypes = {
    auth: PropTypes.object.isRequired,
};


class UserContainer extends Component {
    render() {
        const { payload } = this.props.auth;
        // console.log(payload);
        return (
            <Fragment>
                <User user={payload}></User>
            </Fragment>
        );
    }
}


UserContainer.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(UserContainer);
