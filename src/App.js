import './App.css';
import * as React from 'react';
import {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import HomePage from "./Components/HomePage";
import Project from "./Components/Project";

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <ToastContainer />
            <Switch>
              <Route path='/' component={HomePage} exact={true}/>
              <Route path='/need-a-project' component={Project} exact={true}/>
              {/*<Route path='/problems' component={Problems} exact={true}/>*/}
              <Redirect to='/'/>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
  );
}

export default App;