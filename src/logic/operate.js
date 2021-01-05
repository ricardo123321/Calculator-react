import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);
  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'X':
      return one.times(two).toString();
    case '÷':
      return one.div(two).toString();
    default:
      return '0';
  }
}

export default operate;