import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/Homepage';

function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  )
}

export default Routes;
