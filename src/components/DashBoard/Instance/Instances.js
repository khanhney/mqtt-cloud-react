import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class Instance extends Component {
   render() {
      return (
         <Fragment>
            <div className="content">
               <div className="container-fluid">
                  <div className="container">
                     <h2>All Instance</h2>
                     {/* <p>Combine .table-dark and .table-striped to create a dark, striped table:</p> */}
                     <table className="table table-dark table-striped table-hover">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Server</th>
                              <th>Status</th>
                              <th>Port</th>
                              {/* <th>ID</th> */}
                              <th>User</th>
                              <th>Password</th>
                              <th>Owner</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {this.props.allInstance}
                        </tbody>
                     </table>
                  </div>

                  <div className="container">

                     {/* <p>Combine .table-dark and .table-striped to create a dark, striped table:</p> */}
                     {this.props.newInstance}
                  </div>

               </div>
               {/* container-fluid */}
            </div>
         </Fragment>
      );
   }
}


// Instance.propTypes = propTypes;


export default Instance;
