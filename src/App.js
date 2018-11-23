import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  state = { login: "" };
  setLogIn  = (login) => {
    this.setState({login})
  }
  render() {
    const { login } = this.state;
    return (
      <div className="App">
          <LandingPage login={login} setLogIn={this.setLogIn}/>
      </div>
    );
  }
}

export default App;
