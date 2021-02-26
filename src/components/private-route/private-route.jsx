import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {UserInfoPropTypes} from "../../props";

const PrivateRoute = ({render, path, exact, authInfo}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authInfo &&
            render(routeProps)
            || <Redirect to={`${AppRoute.LOGIN}`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authInfo: UserInfoPropTypes,
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
