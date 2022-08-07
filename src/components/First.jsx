import React, { useEffect, useState } from 'react';

function Fifth() {
  const [age, setAge] = useState(0);
  let incAge = () => {
    setAge(age + 1);
  };

  useEffect(() => {
    document.title = `I am ${age} years old!!`;
  });

  return (
    <div className="boxEntry">
    
      <div className="functionSec">
        <h1>Look at the title of the page</h1>
        <button onClick={incAge}>Increase the age</button>
      </div>
    </div>
  );
}

export default Fifth;