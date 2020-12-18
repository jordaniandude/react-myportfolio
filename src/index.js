import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/amthal"
        render={() => (
          <Header>
            <Amthal />
          </Header>
        )}
      />
      <Route
        path="/gallery"
        render={() => (
          <Header>
            <Gallery />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
