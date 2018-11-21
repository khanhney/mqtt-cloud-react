import React, { Component, Fragment, Suspense } from 'react';
import { routesMain } from '../../routes/routesMain';
import { Switch, Route } from 'react-router-dom';
import TopBar from '../DashBoard/TopBar/TopBar';
import LeftSideBar from '../DashBoard/LeftSideBar/LeftSideBar';
import Footer from '../DashBoard/Footer/Footer';

class DashboardAuth extends Component {

   _showRoutes = routes => {
      let result = null;
      if (routes.length > 0) {
         result = routes.map((item, index) =>
            <Route key={index} path={item.path} exact={item.exact} component={item.main} />)
      }

      return <Suspense fallback={<div>loading...</div>} ><Switch>{result}</Switch></Suspense>
   }

   render() {
      return (
         <Fragment>
            <div id="wrapper">
               {/* TopBar */}
               <TopBar />

               {/* Left side bar */}
               <LeftSideBar />

               {/* ============================================================== */}
               {/* Start right Content here */}
               {/* ============================================================== */}
               <div className="content-page">
                  {/* Start content */}
                  {this._showRoutes(routesMain)}
                  {/* content */}
               </div>

               {/* ============================================================== */}
               {/* End Right content here */}
               {/* ============================================================== */}

               {/* Footer */}
               <Footer />
            </div>
         </Fragment>
      );
   }
}

export default DashboardAuth;
