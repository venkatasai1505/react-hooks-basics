import React, { useState } from 'react';

function Second() {
  const [age, setAge] = useState(19);
  const [siblings, setSiblings] = useState(2);
  let incAge = () => {
    setAge(age + 1);
  };
  let incSib = () => {
    setSiblings(siblings + 1);
  };
  return (
    <div className="boxEntry">
    
      <div className="functionSec">
        <h1>
          I am <span>{age}</span> years old.
        </h1>
        <h1>
          I have <span>{siblings}</span> siblings!
        </h1>
        <div>
          <button onClick={incAge}>Get older</button>
          <button onClick={incSib}>Get more siblings</button>
        </div>
      </div>
    </div>
  );
}

export default Second;