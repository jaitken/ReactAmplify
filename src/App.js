import React from 'react';
import './App.css';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import axios from 'axios';
//import ReviewComponent from './components/Review/ReviewComponent'
import ItemSwitcher from './components/ItemSwitcher/ItemSwitcher'
import ReviewComponent from './components/Review/ReviewComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ItemFamilyId: undefined
    }
    this.changeItemFamily = this.changeItemFamily.bind(this)
  }

  changeItemFamily(id){
    this.setState({ItemFamilyId: id});
    //console.log(this.state.ItemFamilyId);
  }

  render(){
    return (
      <div className='App'> 
        {this.renderSwitch()}
      </div>
    );
  }

  renderSwitch(){
    
    if(this.state.ItemFamilyId === undefined){
      return(
        <div>
          No item selected
          <ItemSwitcher
            changeItemFamily = {this.changeItemFamily}
          />
        </div>
      );
    }else{
      return(
      <div>
          Item {this.state.ItemFamilyId} chosen
          <ItemSwitcher
            changeItemFamily = {this.changeItemFamily}
          />
          <ReviewComponent
          familyId = {this.state.ItemFamilyId}
          />
        </div>
      )
    }


  }

    
}

export default App;
