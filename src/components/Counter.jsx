import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const count1Up = () => {
    setCount1(prevState => {
      return prevState + 1
    })
  }  

  const count1Down = () => {
    setCount1(prevState => prevState - 1)
  }

  const count2Up = () => {
    setCount2(prevState => {
      return prevState + 1
    })
  }  

  const count2Down = () => {
    setCount2(prevState => prevState - 1)
  }

  useEffect( () => {
    console.log("Current count is...", count1, count2)
  }, [count1, count2])

  return (
    <div>
      <p>
        カウント1: {count1}
      </p>
      <button onClick={count1Up}>up</button>
      <button onClick={count1Down}>down</button>
      <p>
        カウント2: {count2}
      </p>
      <button onClick={count2Up}>up</button>
      <button onClick={count2Down}>down</button>
    </div>
  );
};
export default Counter;