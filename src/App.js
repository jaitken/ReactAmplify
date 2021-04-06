import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

function App() {
  
  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      console.log(response.data)
    });
  }
  
  return (

      <div className='App'> 
        <button onClick={getJoke}>Get Joke</button>
      </div>
   
  );
}

export default App;
