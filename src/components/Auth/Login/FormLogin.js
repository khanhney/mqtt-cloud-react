import React, { Component, Fragment } from 'react';
import { showToast } from '../../../utils/config-toastr';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class FormLogin extends Component {
   state = {
      txtUsername: '',
      txtPassword: '',
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.username !== 'undefined' && nextProps.username !== undefined
         && nextProps.username !== ''
         && nextProps.username !== prevState.txtUsername) {
         return {
            txtUsername: nextProps.username
         }
      }

      return null;
   }

   _onChange = e => {
      const target = e.target;
      let name = target.name;
      let value = target.value;

      this.setState({
         [name]: value
      })
   }

   _onSubmit = e => {
      e.preventDefault();
      if (this.state.txtUsername.length >= 6 && this.state.txtPassword.length >= 6) {
         this.props.login(this.state.txtUsername, this.state.txtPassword);
      } else if (this.state.txtUsername.length < 6) {
         showToast('warning', 'Username phải > 6 kí tự');
      } else {
         showToast('warning', 'Password phải > 6 kí tự');
      }

   }

   render() {
      const { txtUsername, txtPassword } = this.state;

      return (
         <Fragment>
            <form className="form-horizontal m-t-30" onSubmit={this._onSubmit} >
               <div className="form-group">
                  <label htmlFor="username">Tài Khoản</label>
                  <input
                     type="text"
                     className="form-control"
                     id="username"
                     name='txtUsername'
                     value={txtUsername}
                     onChange={this._onChange}
                     placeholder="khanhney" />
               </div>
               <div className="form-group"><label htmlFor="userpassword">Mật Khẩu</label>
                  <input
                     type="password"
                     className="form-control"
                     id="userpassword"
                     name='txtPassword'
                     value={txtPassword}
                     onChange={this._onChange}
                     placeholder="**********" />
               </div>
               <div className="form-group row m-t-20">
                  <div className="col-6">
                     {/* <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                        <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                     </div> */}
                  </div>

                  <div className="col-12 text-right">
                     <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Đăng Nhập</button>
                     {/* <button type="button" class="btn btn-primary waves-effect waves-light" id="sa-success">Click me</button> */}
                  </div>
               </div>
               {/* <div className="form-group m-t-10 mb-0 row">
                  <div className="col-12 m-t-20"><a href="pages-recoverpw.html" className="text-muted">
                     <i className="mdi mdi-lock" />
                     Forgot your password?</a>
                  </div>
               </div> */}
            </form>
         </Fragment>
      );
   }
}


// FormLogin.propTypes = propTypes;



export default FormLogin;
