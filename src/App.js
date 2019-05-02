import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
// import ProfilePage from './pages/Profile'


const App = () => {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          {/* <Route path="/profile" component={ProfilePage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
