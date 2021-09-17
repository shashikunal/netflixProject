import React, { useEffect, useState } from "react";

const ExampleForUseEffect = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
      document.title = count;
      console.log(count)
         return ()=> {
            //clean up
      }
  },[count]);

  let handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>Example of useEffect hook</h1>
      <button onClick={handleClick}>add title</button>
    </div>
  );
};

export default ExampleForUseEffect;
