import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(calculate(this, buttonName));
  }

  render() {
    let result;
    const { total, next } = this.state;
    if (next !== null) {
      result = next;
    } else if (total !== null) {
      result = total;
    }
    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
