import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import ActionsList from './ActionsList'


class App extends Component {
  constructor(){
    super()
    this.state = {
      actions: [],
      
    };
  }

  componentDidMount() {
    axios
    .get(`https://webapi-1-challenge.herokuapp.com/api/actions`)
    .then(response => {
      this.setState(() => ({ actions: response.data.projects }));
      console.log(response)
      console.log(this.state)
    })
    .catch(error => {
      console.error(error);
    });
};



  render() {
    return (
      <div  >
       <ActionsList data={this.state.actions}/>
      </div>
    );
  }
}

export default App;
