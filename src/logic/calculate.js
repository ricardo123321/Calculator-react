import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operations = ['%', '÷', '+', '-', 'X'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-') {
    if (total) {
      return {
        total: (total * -1),
        next,
        operation,
      };
    }
    if (next) {
      return {
        total,
        next: (next * -1),
        operation: null,
      };
    }
  }

  if (buttonName === '%') {
    if (total) {
      return {
        total,
        next: (0.01 * total),
        operation,
      };
    }
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      return {
        total: operate(total, next, operation),
        next: null,
        operation: null,
      };
    }
  }

  if (operations.includes(buttonName)) {
    return {
      total,
      next,
      operation: buttonName,
    };
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
    };
  }

  if (!next && !operation && buttonName === '.') {
    return {
      total: total.includes(buttonName) ? total : total + buttonName,
      next,
      operation,
    };
  }

  if (total && operation && buttonName === '.') {
    return {
      total,
      next: next.includes(buttonName) ? next : next + buttonName,
      operation,
    };
  }

  return { total, next, operation };
};

export default calculate;
