import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Instances from '../../components/DashBoard/Instance/Instances';
import { fetchInstancesRequest, fetchNewInstanceRequest, getInstanceByIDRequest, changeStatusRequest } from '../../actions/instance';
import { connect } from 'react-redux';
import InstanceItem from '../../components/DashBoard/Instance/InstanceItem';
import NewInstance from '../../components/DashBoard/Instance/NewInstance';


const propTypes = {
    newInstance: PropTypes.object.isRequired,
    instances: PropTypes.array.isRequired,
    fetchInstancesRequest: PropTypes.func.isRequired,
    fetchNewInstanceRequest: PropTypes.func.isRequired
};

class InstanceContainer extends Component {
    state = {
        id: '',
        status: ''
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.instance.status !== 'undefined' && nextProps.instance.status !== undefined) {
            return {
                id: nextProps.instance._id,
                status: nextProps.instance.status
            }
        }

        return null;
    }

    componentDidMount() {
        this.props.fetchInstancesRequest();
        // this.props.fetchNewInstanceRequest();
    }

    _changeStatus = (id, status) => {
        this.props.changeStatus(id, status);
    }

    _showInstanceItem = instances => {
        var result = null;
        
        let arrTemp = [...instances];
        
        // change status
        if (this.state.status !== '' && this.state.id !== '') {
            // eslint-disable-next-line
            instances.filter((item, index) => {
                if (item._id === this.state.id) {
                    arrTemp[index].status = this.state.status;
                }
            })
        }

        if (arrTemp.length > 0) {
            // console.log(instances.length);
            result = arrTemp.map((item, index) => <InstanceItem
                key={index}
                index={index}
                instance={item}
                history={this.props.history}
                changeStatus={(id, status) => this._changeStatus(id, status)}
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
        instances: state.instances,
        newInstance: state.newInstance,
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
