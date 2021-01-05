import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);
  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber).toString();
    case '-':
      return firstNumber.minus(secondNumber).toString();
    case 'X':
      return firstNumber.times(secondNumber).toString();
    case '÷':
      return firstNumber.div(secondNumber).toString();
    default:
      return '0';
  }
};

export default operate;
