import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { MoralisProvider } from "react-moralis";

import { Authenticator } from "@aws-amplify/ui-react";
import SelectorApp from "SelectorApp";

Amplify.configure(awsExports);
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <Authenticator.Provider>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <SelectorApp />
    </MoralisProvider>
  </Authenticator.Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
