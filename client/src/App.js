import React from 'react';
import Nav from './js/components/Nav';
import FirstPage from './js/components/FirstPage';
import SecondPage from './js/components/SecondPage';
import ThirdPage from './js/components/ThirdPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/firstPage" exact component={FirstPage} />
          <Route path="/secondPage" exact component={SecondPage} />
          <Route path="/thirdPage" exact component={ThirdPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
