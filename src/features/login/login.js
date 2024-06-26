import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import styles from "./login.module.css";
import {
  editUsername,
  editPassword,
  toggleMode,
  selectAuthen,
  seleceIsLoginView,
  fetchAsyncLogin,
  fetchAsyncRegister,
  fetchAsyncProf,
} from "./loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const authen = useSelector(selectAuthen);
  const isLoginView = useSelector(seleceIsLoginView);
  const btnDisabler = authen.username === "" || authen.password === "";
  const login = async () => {
    if (isLoginView) {
      await dispatch(fetchAsyncLogin(authen));
    } else {
      const result = await dispatch(fetchAsyncRegister(authen));
      if (fetchAsyncRegister.fulfilled.match(result)) {
        await dispatch(fetchAsyncLogin(authen));
      }
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.appLogin}>
        <h1>{isLoginView ? "Login" : "Register"}</h1>
        <span>Username</span>
        <input
          type="text"
          className={styles.inputLog}
          name="username"
          placeholder=""
          onChange={(e) => dispatch(editUsername(e.target.value))}
          required
        />
        <span>Password</span>
        <input
          type="password"
          className={styles.inputLog}
          name="password"
          placeholder=""
          onChange={(e) => dispatch(editPassword(e.target.value))}
          required
        />
        <div className={styles.switch}>
          <Button
            variant="contained"
            disabled={btnDisabler}
            color="primary"
            onClick={login}
          >
            {isLoginView ? "Login" : "Register"}
          </Button>
          <br />
          <br />
          <span onClick={() => dispatch(toggleMode())}>
            {isLoginView ? "Create new account ?" : "Back to Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
