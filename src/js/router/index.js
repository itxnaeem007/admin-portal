import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleVerify } from "../redux/actions";
import Login from "../pages/Login";
import ResetPassword from "../pages/Rest-Password";
import ConfirmPassword from "../pages/Confirm-Password";
import Contractor from "../pages/Contractor/index";

const Router = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ Auth }) => Auth);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (state) {
      setAuth(state.auth);
    }
  }, [state]);
  useEffect(() => {
    dispatch(handleVerify());
  }, []);

  return (
    <React.Fragment>
      <main>
        <>
          {!auth ? (
            <>
              <Switch>
                <Route
                  exact
                  path="/confirm-password"
                  component={ConfirmPassword}
                />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
              </Switch>
            </>
          ) : (
            <>
              <Switch>
                <Route exact path="/Users" component={Contractor} />
                <Route exact path="*" render={() => <Redirect to="/Users" />} />
              </Switch>
            </>
          )}
        </>
      </main>
    </React.Fragment>
  );
};
export default Router;
