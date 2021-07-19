import React from "react";
import LoginPage from "./components/LoginPage";
import {Route, Switch} from 'react-router-dom';
import Inputs from "./components/Inputs.js";

function App() {
  return (
    <div>
      <Switch>
     <Route exact path="/">
     <LoginPage/>
     </Route>
     <Route path='/inputs' > 
     <Inputs/>
     </Route>
     </Switch>
    </div>
  );
}

export default App;

