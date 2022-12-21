import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { useAuthenticator } from '@aws-amplify/ui-react';


function App() {

  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  useEffect(() => {
    console.log("AUTHSTATUS", authStatus)
  }, [authStatus])



  return (
    <Router>
      <Switch>
        <Route path={`/`} component={AdminLayout} />
      </Switch>
    </Router>
  )
}

export default App