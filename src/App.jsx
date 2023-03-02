import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { useAuthenticator } from "@aws-amplify/ui-react";
import PurchaseSuccess from "views/Dashboard/PurchaseSuccess";
import PurchaseSuccessTrimestral from "views/Dashboard/PurchaseSuccessTrimestral";
import PurchaseSuccessFivemestral from "views/Dashboard/PurchaseSuccessFivemestral";
import Invite from "views/Dashboard/Invite";

function App() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    console.log("AUTHSTATUS", authStatus);
  }, [authStatus]);

  /* if (env === 'production') {
    console.log = function () {};
} */

  return (
    <Router>
      <Switch>
        <Route path={`/`} component={AdminLayout} />
        <Route path={`/success-purchase`} component={PurchaseSuccess} />
        <Route
          path={`/success-purchase-trimestral`}
          component={PurchaseSuccessTrimestral}
        />
        <Route
          path={`/success-purchase-5month`}
          component={PurchaseSuccessFivemestral}
        />

        <Route path={`/invite/:username`} component={Invite} />
      </Switch>
    </Router>
  );
}

export default App;
