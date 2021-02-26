import React from 'react';
import {Router as BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import Favorites from "../pages/favorites/favorites";
import Login from "../pages/login/login";
import Property from "../pages/property/property";
import NotFound from "../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={`${AppRoute.MAIN}`} exact>
          <MainPage/>
        </Route>
        <PrivateRoute exact
          path={`${AppRoute.FAVORITES}`}
          render={() => <Favorites/>}
        >
        </PrivateRoute>
        <Route path={`${AppRoute.LOGIN}`} exact>
          <Login/>
        </Route>
        <Route path={`${AppRoute.OFFER}/:id`} exact>
          <Property/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
