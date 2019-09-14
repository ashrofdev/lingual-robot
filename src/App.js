import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header';
import List from './components/Definitions/List';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      outcome: []
    }
  }
  onSearch =  () => {
    console.log('loading...')
    this.setState({search: document.querySelector('input').value})
    setTimeout( async () => {
      await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${this.state.search}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
        }
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({outcome: data.list})
        console.log(data.list)
      })
      .catch(err => {
        console.log(err);
      });
    }, 10);
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header onSearch={this.onSearch}/>
          <List outcome={this.state.outcome} search={this.state.search}/>
        </div>
      </div>
    );
  }
}

export default App;
