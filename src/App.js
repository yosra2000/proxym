import React from "react";
import LoginPage from "./components/LoginPage";
import {Route, Switch} from 'react-router-dom';
import Inputs from "./components/inputs";

function App() {
  return (
    <div>
      <Switch>
     <Route path="/">
     <LoginPage/>
     </Route>
     <Route path='/inputs' component={Inputs}> 
     <Inputs/>
     </Route>
     </Switch>
    </div>
  );
}

export default App;
