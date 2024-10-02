// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.
// uselayouteffect run first then component render
// use this hook when you want to update your data before the screen

// useEffect runs asynchronously and after a render is painted to the screen.
import React, { useState, useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    useEffect(() => {
        console.log("1");
    },[])

    useEffect(() => {
        console.log("2");
    },[])

    useEffect(() => {
        console.log("3");
    },[])
// Above useEffect outptut will be 1 2 3 but when we use useeffectlayout then this will run first then useeffect run
    useLayoutEffect(() => {
    console.log("4");
    },[])
    // Now the sequence will be 4 1 2 3 

    const [num, setNum] = useState(0);

    useLayoutEffect(() => {
      if (num === 0) setNum(num + Math.random() * 100);
    }, [num]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <p>my new random number {num}</p>
      <button onClick={() => setNum(0)}>random num</button>
    </div>
  )
}

export default UseLayoutEffect
