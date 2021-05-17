import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllSoftwarePage from './all-software/AllSoftwarePage';
import HomePage from './home/HomePage';

function App() {
  return (
    <div>
      <div className="Ns-container dark">
        <Router>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/all-software">
              <AllSoftwarePage />
            </Route>
          </Switch>

        </Router>,
      </div>
    </div>
  );
}

export default App;
