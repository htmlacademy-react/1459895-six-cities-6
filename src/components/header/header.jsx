import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as ActionCreator from "../store/action-creators";
import {logout} from "../api/api-actions";
import {AppRoute} from "../../const";
import {UserInfoPropTypes} from "../../props";

const LogoutStyles = {
  border: `none`,
  marginLeft: `5px`,
  backgroundColor: `transparent`,
  textTransform: `uppercase`,
  outline: `none`
};

const Header = ({onLogout, onChangeLoaded, userInfo}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={`${AppRoute.MAIN}`} className="header__logo-link header__logo-link--active" onClick={onChangeLoaded}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={userInfo && `${AppRoute.FAVORITES}` || `${AppRoute.LOGIN}`} className="header__nav-link header__nav-link--profile">
                  {
                    userInfo &&
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                  }
                  <span className="header__user-name user__name">{userInfo && userInfo.data.email || `Sign In`}</span>
                </Link>
              </li>
              {userInfo &&
                <li className="header__nav-item user">
                  <button
                    onClick={() => onLogout()}
                    style={LogoutStyles}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <span className="header__user-name user__name">Logout</span>
                  </button>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  onChangeLoaded: PropTypes.func,
  onLogout: PropTypes.func,
  userInfo: UserInfoPropTypes
};

const mapStateToProps = (state) => ({
  userInfo: state.authInfo
});

const mapDispatchToProps = (dispatch) => ({
  onChangeLoaded() {
    dispatch(ActionCreator.setIsNearbyOffersLoaded());
  },
  onLogout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
