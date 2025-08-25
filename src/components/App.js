import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PlantPage from "./PlantPage";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={PlantPage} />
        {/* Removed Users route since no Users.js exists */}
      </Switch>
    </Router>
  );
}

export default App;
