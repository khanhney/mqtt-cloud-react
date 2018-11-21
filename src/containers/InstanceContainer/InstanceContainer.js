import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Instances from '../../components/DashBoard/Instance/Instances';
import { fetchInstancesRequest, fetchNewInstanceRequest, getInstanceByIDRequest, changeStatusRequest } from '../../actions/instance';
import { connect } from 'react-redux';
import InstanceItem from '../../components/DashBoard/Instance/InstanceItem';
import NewInstance from '../../components/DashBoard/Instance/NewInstance';


const propTypes = {
    newInstance            : PropTypes.object.isRequired,
    instances              : PropTypes.array.isRequired,
    fetchInstancesRequest  : PropTypes.func.isRequired,
    fetchNewInstanceRequest: PropTypes.func.isRequired
};


class InstanceContainer extends Component {

    componentDidMount() {
        this.props.fetchInstancesRequest();
        // this.props.fetchNewInstanceRequest();
    }

    _showInstanceItem = instances => {
        var result = null;
        if (instances.length > 0) {
            // console.log(instances.length);
            result = instances.map((item, index) => <InstanceItem
                key              = {index}
                index            = {index}
                instance         = {item}
                history          = {this.props.history}
                changeStatus     = {this.props.changeStatus}
                />)
        }

        return result;
    }

    // _showDetailInstance = _id => {
    //     this.props.getInstanceByIDRequest(_id, this.props.history);
    // }

    _showNewInstance = instance => {
        return <NewInstance instance={instance} createInstance={this._createInstance} />
    }

    _createInstance = () => {
        this.props.fetchNewInstanceRequest();
        this.props.fetchInstancesRequest();
    }

    render() {
        const { instances, newInstance } = this.props;
        // console.log(instances)
        return (
            <Fragment>
                <Instances allInstance={this._showInstanceItem(instances)} newInstance={this._showNewInstance(newInstance)} />
            </Fragment>
        );
    }
}


InstanceContainer.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
    return {
        instances      : state.instances,
        newInstance    : state.newInstance,
        getInstanceByID: state.detailInstance,
        instance: state.instance
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInstancesRequest: () => {
            dispatch(fetchInstancesRequest())
        },
        fetchNewInstanceRequest: () => {
            dispatch(fetchNewInstanceRequest())
        },
        getInstanceByIDRequest: (_id, history) => {
            dispatch(getInstanceByIDRequest(_id, history))
        },
        changeStatus: (idInstance, status) => {
            dispatch(changeStatusRequest(idInstance, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstanceContainer);
