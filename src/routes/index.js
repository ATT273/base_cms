import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import PrivateRoute from './Private';
import PublicRoute from './Public';
// import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
// import SpinnerService from '../common/spinner/spinnerService';
import routes from './routes';

const Routes = () => (
    <Router>
            {/* <SpinnerService />
            <ToastsContainer className='toast-container' store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground /> */}
            <Switch>
                {
                    routes.map((route, i) => {
                        // if (route.auth) {
                        //     return <PrivateRoute key={i} {...route} />;
                        // }
                        return <PublicRoute key={i} {...route} />;
                    })

                }
                <Route component={NotFoundRedirect} />
            </Switch>
    </Router>
);

const NotFoundRedirect = () => <Redirect to='/' />;

export default Routes;
