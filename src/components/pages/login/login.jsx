import React, {useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../api/api-actions";

const Login = ({onSubmit}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: emailRef.current.value,
      password: passwordRef.current.value
    });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        onSubmit={handleSubmit}
        action="#"
        method="post"
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
        >Sign in</button>
      </form>
    </section>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
