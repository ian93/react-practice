import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.title}</p>
      <p>{props.username}{props.children}</p>
    </div>
  );
};

export default userOutput;
