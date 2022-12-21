import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import RTLLayout from "layouts/RTL.js"; // Chakra imports
import { ChakraProvider } from "@chakra-ui/react";
// Custom Chakra theme
import theme from "theme/theme.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.css";
import QuickStart from "components/QuickStart";
import App from "./App";

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { AuthStyle } from "./AuthStyle";

import {
  Authenticator
} from '@aws-amplify/ui-react';

Amplify.configure(awsExports);


ReactDOM.render(

  <AuthStyle>
    <ChakraProvider theme={theme} resetCss={false} position="relative">

      <App />

    </ChakraProvider>
  </AuthStyle>
  ,

  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
