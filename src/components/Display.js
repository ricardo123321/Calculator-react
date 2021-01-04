import React from 'react';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      {result}
    </div>
  )
}

export default Display