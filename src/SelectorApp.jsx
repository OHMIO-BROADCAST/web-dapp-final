import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { AuthStyle } from 'AuthStyle';
import App from 'App';
import { ChakraProvider } from "@chakra-ui/react";
// Custom Chakra theme
import theme from "theme/theme.js";

function SelectorApp() {

  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  useEffect(() => {
    console.log("AUTHSTATUS", authStatus)
  }, [authStatus])

  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <AuthStyle /> : (<ChakraProvider theme={theme} resetCss={false} position="relative">
        <App />
      </ChakraProvider>)}
    </>
  )
}

export default SelectorApp