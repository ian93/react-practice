import React from 'react';

const userInput = (props) => {
  const inputCss = {
    width: '40%',
    margin: 'auto',
    backgroundColor: '#ccc',
    boxShadow: '0 2px 3px #777',
    cursor: 'pointer',
  };

  return (
    <div className="UserInput" style={inputCss}>
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  );
};

export default userInput;
