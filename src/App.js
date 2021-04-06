import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

function App() {
  
  const getJoke = () => {
    axios.get('http://localhost:8080/api/review/getByItemFamily/2')
    .then(response => {
      console.log(response.data)
    });
  }
  
  return (

      <div className='App'> 
        <button onClick={getJoke}>Get Reviews</button>
      </div>
   
  );
}

export default App;
