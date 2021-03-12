import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../store/api/api-actions";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../../const.js";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const {authInfo} = useSelector((state) => state.USER);

  if (authInfo) {
    return <Redirect to={`${AppRoute.MAIN}`}/>;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      login: emailRef.current.value,
      password: passwordRef.current.value
    }));
  };

  return (
    <section className="login">
      <h1 className="login__title" data-testid="Sign in">Sign in</h1>
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
            data-testid="email"
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
            data-testid="password"
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

export default Login;
