import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Header from "./pages/header";
import Homepage from "./pages/homepage";
import Test from "./pages/test";

export default function NestingExample() {
  return (
    <Router>
         <Header></Header>
          <Switch>
          <Route exact path="/" component = {Homepage} >
            
          </Route>
           </Switch>
   
    </Router>
  );
}
