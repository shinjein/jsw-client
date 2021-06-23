import "./App.css";
import React from "react";
import ListProjects from "./components/ListProjects";
import { Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={["/", "/projects"]} component={ListProjects} />
        <Route exact path="/projects/add" component={AddProject} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );  
}



export default App;
