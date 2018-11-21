import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
   instance: PropTypes.object.isRequired
};


class NewInstance extends Component {

   _onCreateInstance = () => {
      this.props.createInstance();
   }

   render() {
      const { instance } = this.props;
    //   console.log(instance);
      return (
         <Fragment>
            <div className="card">
               <div className="card-header">
                  <h2>Create new Instance</h2>
                  <button type="button" className="btn btn-outline-success" onClick={this._onCreateInstance} >Create Instance</button>
               </div>
               <div className="card-body">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <span className="badge badge-info mr-50" placeholder='Server...'>{instance.server}</span>
                     <span className="badge badge-info" placeholder='Create_At...'>{instance.createAt}</span>
                  </div>
                  <form>
                     <fieldset disabled >
                        <div className="row">
                           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                              <div className="form-group">
                                 <label >Owner</label>
                                 <input type="text" className="form-control" defaultValue={instance.owner} placeholder="Owner..." />
                              </div>
                              <div className="form-group">
                                 <label >Status</label>
                                 <input type="text" className="form-control" defaultValue={instance.status} placeholder="Status..." />
                              </div>
                           </div>

                           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                              <div className="form-group">
                                 <label >Port</label>
                                 <input type="text" className="form-control" defaultValue={instance.port} placeholder="Port..." />
                              </div>
                              <div className="form-group">
                                 <label >ID</label>
                                 <input type="text" className="form-control" defaultValue={instance._id} placeholder="ID..." />
                              </div>
                           </div>

                           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                              <div className="form-group">
                                 <label >User</label>
                                 <input type="text" className="form-control" defaultValue={instance.user} placeholder="User..." />
                              </div>
                              <div className="form-group">
                                 <label >Password</label>
                                 <input type="text" className="form-control" defaultValue={instance.pwd} placeholder="Password..." />
                              </div>
                           </div>
                        </div>
                     </fieldset>
                  </form>
               </div>
            </div>

         </Fragment >
      );
   }
}


NewInstance.propTypes = propTypes;


export default NewInstance;
