import React, { Component } from 'react';
import NavBar from './components/layout/Navbar';
import {Switch,Route} from 'react-router-dom';
import Dashboard  from "./components/dashboard/DashBoard";
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';


class App extends Component {
  
  render() {
    return (
      <div >
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/create" component={CreateProject}/>
        </Switch>
      </div>
    );
  }
}


export default App;
