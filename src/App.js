import React from 'react';
import './App.css';
import ReviewComponent from './components/Review/reviewComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div> 
        <Switch>
          <Route path='/' component={ReviewComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
