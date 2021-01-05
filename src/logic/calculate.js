import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operations = ['%', '÷', '+', '-', 'X'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    [total, next, operation] = [null, null, null];
  }

  if (buttonName === '+/-') {
    if (total) (total *= -1);
    if (next) (next *= -1);
    operation = null;
  }

  if (buttonName === '%') {
    if (total) next = (0.01 * total);
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    return{
      total,
      next,
      operation: buttonName,
    }
  }

  if (nums.includes(buttonName)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (total && nums.includes(buttonName)) {
    return {
      total: buttonName,
      next,
      operation,
    }
  }

  if (!next && !operation && buttonName === '.') {
    return{
    total:  total.includes(buttonName) ? total : total + buttonName,
    next,
    operation,
    }
  }

  if (total && operation && buttonName === '.') {
    return{
      total,
      next: next.includes(buttonName) ? next : next + buttonName,
      operation,
    }
  }

return { total, next, operation };

}

export default calculate;