import React from 'react';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      {result}
    </div>
  )
}

Display.prop = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display