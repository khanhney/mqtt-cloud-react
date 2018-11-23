import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  instance: PropTypes.object.isRequired,
  index: PropTypes.number,
};

class InstanceItem extends Component {

  _onDetailInstance = (e) => {
    const target = e.target;
    if (target.type !== 'button') {
      console.log(target);
      this.props.history.push(`/instance/${this.props.instance._id}`);
    }
  }

  _onChangeStatus = (idInstance, status) => {
    this.props.changeStatus(idInstance, status);
  }

  render() {
    const { instance, index } = this.props;
    return (
      <Fragment>
        <tr onClick={this._onDetailInstance}  style={{cursor: 'pointer'}} >
          <td>{index + 1}</td>
          <td>{instance.server}</td>
          <td>{instance.status === 1 ?
            <span className="badge badge-success">Đã hoạt động</span>
            : <span className="badge badge-dark">Không hoạt động</span>}</td>
          <td>{instance.port}</td>
          {/* <td>{instance._id}</td> */}
          <td>{instance.user.length > 8 ? instance.user.substring(0, 8) + '***' : instance.user}</td>
          <td>{instance.pwd.length > 8 ? instance.pwd.substring(0, 8) + '***' : instance.pwd}</td>
          <td>{instance.owner.username}</td>
          <td >
            <button type="button" className={`btn btn-outline-${instance.status === 1 ? 'danger' : 'success'}`}
              onClick={() => this._onChangeStatus(instance._id, instance.status)} >
              {instance.status === 1 ? 'Tắt' : 'Bật'}
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}


InstanceItem.propTypes = propTypes;


export default InstanceItem;
