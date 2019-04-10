import React from 'react';

const textValidator = (props) => {
  let btnText = 'Text too short';
  if (props.length > 4) { btnText = 'Text long enough'; }

  return (<p>{ btnText }</p>);
};

export default textValidator;
