import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button className="btns" type="button">
      {name}
    </button>
  )
}
Button.PropTypes = {
  name: PropTypes.string
}

export default Button