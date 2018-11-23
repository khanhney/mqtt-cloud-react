import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';


const propTypes = {
  instance: PropTypes.object.isRequired,
  changeStatus: PropTypes.func.isRequired,
};


class DetailInstance extends Component {
  state = {
    owner: {
      createAt: '',
      email: '',
      fullname: '',
      password: '',
      status: '',
      username: '',
      _id: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof nextProps.instance.owner === 'object' && nextProps.instance.owner !== prevState.owner) {
      return {
        owner: nextProps.instance.owner
      }
    }

    return null;
  }

  _onChangeStatus = (idInstance, status) => {
    this.props.changeStatus(idInstance, status);
  }

  _onChangeUser = (idInstance) => {
    this.props.changeUser(idInstance);
  }

  _onChangePassword = (idInstance) => {
    this.props.changePassword(idInstance);
  }

  render() {
    const { instance } = this.props;
    const { owner } = this.state;
    let status = instance.status;
    //   let user = instance.user;
    //   let pwd = instance.pwd;
    console.log(this.props)

    return (
      <Fragment>
        <div className="content">
          <div className="container-fluid">
            <div className="container">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  mt-100">
                <Link to='/instance' className="btn btn-outline-info" >{`< Back`}</Link>
              </div>
              <div className="row mt-10">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="card border-info mb-3">
                    <div className="card-header"><h5>Information Instance</h5></div>
                    <div className="card-body text-info">
                      <h5 className="card-title">SERVER : {instance.server}</h5>
                      <p className="card-text">PORT     : {instance.port} </p>
                      <p className="card-text">USER     : <strong>{instance.user} </strong>
                        <button type="button" className="btn btn-outline-info btn-sm waves-effect waves-light align-button"
                          onClick={() => this._onChangeUser(instance._id)} >Rotate
                                    </button>
                      </p>
                      <p className="card-text">PASSWORD : <strong>{instance.pwd}</strong>
                        <button type="button" className="btn btn-outline-info btn-sm waves-effect waves-light align-button"
                          onClick={() => this._onChangePassword(instance._id)} >Rotate
                                    </button>
                      </p>
                      <p className="card-text">STATUS   : {instance.status === 1 ?
                        <span className="badge badge-info">Đã hoạt động</span> :
                        <span className="badge badge-dark">Không hoạt động</span>}
                        <button type="button" className="btn btn-outline-info btn-sm waves-effect waves-light align-button"
                          onClick={() => this._onChangeStatus(instance._id, status)} >{status === 1 ? 'Tắt' : 'Bật'}
                        </button>
                      </p>

                      <p className="card-text">CREATE AT: {moment(instance.createAt).format('MMMM Do YYYY, h:mm:ss a')} </p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="card border-success mb-3">
                    <div className="card-header"><h5>Information User</h5></div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Owner</h5>
                      <p className="card-text">EMAIL         : {owner.email} </p>
                      <p className="card-text">FULLNAME      : {owner.fullname} </p>
                      <p className="card-text">USERNAME      : {owner.username} </p>
                      <p className="card-text">STATUS        : {owner.status === 1 ?
                        <span className="badge badge-success">Đã hoạt động</span>
                        : <span className="badge badge-dark">Không hoạt động</span>} </p>
                      <p className="card-text">CREATE AT     : {moment(owner.createAt).format('MMMM Do YYYY, h:mm:ss a')} </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
          {/* container-fluid */}
        </div>

      </Fragment>
    );
  }
}


DetailInstance.propTypes = propTypes;


export default DetailInstance;
