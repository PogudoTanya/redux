import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { RedditApiTokenProvider } from "hooks/useRedditApi";
import App from "./App";

import "./index.css";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <RedditApiTokenProvider>
          <App />
        </RedditApiTokenProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
