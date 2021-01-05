import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;
  return (
    <button className="btns" type="button" onClick={() => { handleClick(name); }}>
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
