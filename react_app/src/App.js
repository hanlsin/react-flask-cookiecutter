import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useStoreState } from "easy-peasy";
import { ThemeProvider } from "styled-components";

// global theme
import theme from "./theme";

// Containers or components
import Welcome from "./components/Welcome";
import Home from "./components/Home";

function App() {
  const isRegistered = useStoreState(state => state.userState.isUserSet);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isRegistered === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/welcome" />
          )
        }
      />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="root-container">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/welcome" component={Welcome} exact></Route>
            <PrivateRoute path="/home" component={Home} exact></PrivateRoute>
            <Route path="/" component={Welcome} exact></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
