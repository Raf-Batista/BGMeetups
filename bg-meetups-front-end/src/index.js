import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { ActionCableProvider } from 'react-actioncable-provider';


const store = configureStore();

const renderApp = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ActionCableProvider url={`ws://localhost:3000/cable`}> {/* ${process.env.REACT_APP_URL} */}
          <App />
        </ActionCableProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
