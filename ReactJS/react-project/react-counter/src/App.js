import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {

  

  render() {

    return (
      <div className="App">
        <header className="App-header"> {/*comment*/}
          <h1>Licznik w ReactJS</h1>
        </header>
        <Counter initValue="10"/>
        <Counter />
      </div>
    );
  }
}

export default App;
