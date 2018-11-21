import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { changeStatusRequest, changeUserRequest, changePasswordRequest, getInstanceByIDRequest } from '../../actions/instance';
import DetailInstance from '../../components/DashBoard/Instance/DetailInstance';
import { connect } from 'react-redux';


const propTypes = {
    instance: PropTypes.object.isRequired,
    changeStatus: PropTypes.func.isRequired,
    changeUser: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
};

var count = 0;


class ActionContainer extends Component {

    componentWillMount() {
        const { match } = this.props;
        if (match) {
            const { params } = match;
            this.props.getInstance(params.idInstace);
        }
    }


    _changeStatus = (id, status) => {
        this.props.changeStatus(id, status);
    }

    _changeUser = (id) => {
        this.props.changeUser(id);
    }

    _changePassword = (id) => {
        this.props.changePassword(id);
    }

    render() {
        const { instance } = this.props;
        if(count === 0){
            count ++;
            return null;
        }

        return (
            <Fragment>
                <DetailInstance
                    instance       = {instance}
                    changeStatus   = {(idInstance, status) => this._changeStatus(idInstance, status)}
                    changeUser     = {(idInstance) => this._changeUser(idInstance)}
                    changePassword = {(idInstance) => this._changePassword(idInstance)}
                ></DetailInstance>
            </Fragment>
        );
    }
}


ActionContainer.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
    return {
        instance: state.instance
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInstance: idInstance => {
            dispatch(getInstanceByIDRequest(idInstance))
        },
        changeStatus: (idInstance, status) => {
            dispatch(changeStatusRequest(idInstance, status))
        },
        changeUser: idInstance => {
            dispatch(changeUserRequest(idInstance))
        },
        changePassword: idInstance => {
            dispatch(changePasswordRequest(idInstance))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActionContainer);
