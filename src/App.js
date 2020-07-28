import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./users/User";
import Alert from "./components/Alert";
import Home from "./components/pages/Home";
import "./App.css";
import About from "./components/pages/About";
import GithubState from "./components/context/github/githubState";
import AlertState from "./components/context/alert/alertState";
import NotFound from "./components/pages/NotFound";

const App = props => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
