import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import DummyContainer from "./containers/DummyContainer";

const NotFound = () => (
  <div>
    <h2>Sorry, nothing here</h2>
  </div>
);

const Dashboard = (props) => (
  <div>
    <h2>Dashboard</h2>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <DummyContainer path="/" />
        <Dashboard path="/dashboard" />
        <NotFound default />
      </Router>
    </React.StrictMode>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
