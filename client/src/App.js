import React from 'react';
import Nav from './js/components/Nav';
import FirstPage from './js/components/FirstPage';
import SecondPage from './js/components/SecondPage';
import ThirdPage from './js/components/ThirdPage';
import Home from './js/components/Home';
import TVShows from './js/components/TVShows';
import Movies from './js/components/Movies';
import Latest from './js/components/Latest';
import MyList from './js/components/MyList';
import Footer from './js/components/Footer';
import ContentRow from './js/components/ContentRow';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div classNameName="App">
        <Nav />
        <Switch>
          <Route path="/firstPage" exact component={FirstPage} />
          <Route path="/secondPage" exact component={SecondPage} />
          <Route path="/thirdPage" exact component={ThirdPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/tVShows" exact component={TVShows} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/latest" exact component={Latest} />
          <Route path="/myList" exact component={MyList} />
        </Switch>
        <ContentRow category="Latest Releases" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
