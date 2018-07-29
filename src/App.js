import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Home from "./containers/Home";
import asyncComponent from "./hoc/asyncComponent";

const AsyncComp = asyncComponent(() => {
  return import("./containers/Comp.js");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link> | <Link to="/comp">Computer</Link>
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/comp" component={AsyncComp} />
        </div>
      </div>
    );
  }
}

export default App;
