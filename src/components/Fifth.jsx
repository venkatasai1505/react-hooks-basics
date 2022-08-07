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
        <h1></h1>
       
      </div>
    </div>
  );
}

export default Fifth;