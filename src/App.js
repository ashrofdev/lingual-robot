import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      outcome: []
    }
  }
  onSearch = () => {
    const search = document.querySelector('input').value
    console.log('loading...')
    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${search}`, {
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
      this.setState({outcome: data})
      console.log(data.list)
    })
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header onSearch={this.onSearch}/>
        </div>
      </div>
    );
  }
}

export default App;
