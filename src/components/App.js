import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
