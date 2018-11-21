import React, { Component, Fragment } from 'react';

class HeaderLogin extends Component {
   render() {
      return (
         <Fragment>
            <div className="card">
               <div className="card-body">
                  <h3 className="text-center m-0"><a href="index.html" className="logo logo-admin"><img src="assets/images/iotHutech.png" height={120} alt="logo" /></a></h3>
                  <div className="p-3">
                     <h4 className="text-muted font-18 m-b-5 text-center">Welcome IoT-HUTECH.</h4>
                     <p className="text-muted text-center">Đăng Nhập để tiếp tục.</p>
                     {/* Form Login */}
                     {this.props.showForm}
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
}


// HeaderLogin.propTypes = propTypes;


export default HeaderLogin;

