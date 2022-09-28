import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home/index";

export default function RouterDom() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}
