import React from "react";
// react router - the whole application needs to wrapped around react-router so it can be used by every component.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

// In react-router it will show all the routes that are matching. / and /about/ and /people. To avoid this we use exact prop. * means it will always match, error handling - but it will also match with other component pages. So if we wrap the Routes with Switch component only the first componenet that matches only be displayed.

export default ReactRouterSetup;
