import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Editor from "./Components/Editor/Editor";
import CustomRange from "./Components/rangeInput/CustomRange";
import ScrollSpy from "./Components/scrollSpy/ScrollSpy";
import RentVehicle from "./pages/RentVehicle";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={CustomRange} />
          <Route exact path="/editor" component={Editor} />
          <Route exact path="/scroll-spy" component={ScrollSpy} />
          <Route exact path="/rent-vehicle" component={RentVehicle} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
