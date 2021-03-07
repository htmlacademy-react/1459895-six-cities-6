import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRoute} from "../../const";
import Spinner from "../spinner/spinner";

const PrivateRoute = ({render, path, exact}) => {
  const {authInfo, loading} = useSelector((state) => state.USER);

  if (loading) {
    return (
      <Spinner/>
    );
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authInfo ?
            render(routeProps)
            : <Redirect to={`${AppRoute.LOGIN}`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func
};

export default PrivateRoute;
