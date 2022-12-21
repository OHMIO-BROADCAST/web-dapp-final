import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";

function App() {





  return (
    <Router>
      <Switch>
        <Route path={`/`} component={AdminLayout} />

      </Switch>
    </Router>
  )
}

export default App