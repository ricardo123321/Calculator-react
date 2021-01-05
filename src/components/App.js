import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(
      prevState => (calculate(prevState, buttonName)),
    );
  }

  render() {
    let calc;
    const { next, total, operation } = this.state;
    if (next !== null) {
      calc = next;
    } else if (total !== null) {
      calc = total;
    }

    return (
      <>
        <Display result={
            `
            ${total || ''}
            ${operation || ''}
             ${next || ''}`
          }
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
