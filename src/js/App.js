import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Light } from "./utils/theme";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Store from "./redux/store";
import Routes from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
function App() {
  return (
    <>
      <Provider store={Store}>
        <ThemeProvider theme={Light}>
          <Router>
            <Switch>
              <Routes />
            </Switch>
          </Router>
          <ToastContainer limit={1} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
