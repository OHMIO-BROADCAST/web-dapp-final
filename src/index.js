import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import { Authenticator } from "@aws-amplify/ui-react";
import SelectorApp from "SelectorApp";

Amplify.configure(awsExports);

ReactDOM.render(
  <Authenticator.Provider>
    <SelectorApp />
  </Authenticator.Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
