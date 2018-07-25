import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentWillMount() {
    this.setState({uniqueValues: false})
    axios({
      method: 'get',
      url: 'http://localhost:3001/'
    })
    .then(res => this.setState({uniqueValues: res.data.data}))
    .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {this.state.uniqueValues && this.state.uniqueValues.map((val, index) => (
            <div key={index}><span>{val}</span><br/></div>
          ))}
      </div>
    );
  }
}

export default App;
