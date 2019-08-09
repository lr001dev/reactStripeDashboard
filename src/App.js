import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    sessions: []

  }
  componentDidMount() {
    fetch('sessions')
    .then(response => response.json())
    .then((sessionData) => {
      this.setState({ sessions: [sessionData]})
    })
    .catch(err=> console.log(err))
  }
  render() {
    return (
      <div className="App">
        <h1> Hello World</h1>
      </div>
    )
  }

}

export default App
