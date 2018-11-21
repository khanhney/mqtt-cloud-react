import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import SignUpContainer from '../../containers/SignUpContainer/SignUpContainer';
import DashboardAuth from '../DashBoard/DashboadAuth';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PrivateRoute from '../../routes/PrivateRoute';


/**
 * Set up lazy load component
 */
// var LoginContainer = lazy(() => import('../../containers/LoginContainer/LoginContainer'));
// var DashboadAuth   = lazy(() => import('../DashBoard/DashboadAuth'));
// var PrivateRoute   = lazy(() => import('../../routes/PrivateRoute'));
// var SignUp         = lazy(() => import('../Auth/SignUp/SignUp'));
// var NotFoundPage   = lazy(() => import('../NotFoundPage/NotFoundPage'));

class App extends Component {

   render() {
      return (
         <Fragment>
            <Switch>
                  <Route path="/login" component={LoginContainer} />
                  <Route path='/sign-up' component={SignUpContainer} />
                  <PrivateRoute path="/instance" component={DashboardAuth} />
                  {/* <Route component={NotFoundPage} /> */}
               </Switch>
         </Fragment>
      );
   }
}

export default App;
