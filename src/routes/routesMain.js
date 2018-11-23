import React, { lazy } from 'react';

/**
 * routes main of dashboard
 */
const UserContainer     = lazy(() => import('../containers/UserContainer/UserContainer'));
const InstanceContainer = lazy(() => import('../containers/InstanceContainer/InstanceContainer'));
const ActionContainer   = lazy(() => import('../containers/InstanceContainer/ActionContainer'))

export const routesMain = [
    {
        path : '/user',
        exact: true,
        main : ({ match, history }) => <UserContainer match={match} history={history} />
    },
    {
        path : '/instance',
        exact: true,
        main : ({ match, history }) => <InstanceContainer match={match} history={history} />
    },
    {
        path : '/instance/:idInstace',
        exact: true,
        main : ({ match, history }) => <ActionContainer match={match} history={history} />
    }
];