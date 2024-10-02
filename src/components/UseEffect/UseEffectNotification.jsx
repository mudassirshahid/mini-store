import React, {useEffect, useState} from 'react'


const UseEffectNotification = () => {

    const [counter, setCounter] = useState(0);


    const Increment = () => {
        setCounter(counter + 1)
    }

    const Decrement = () => {
       if(counter > 0) {
        setCounter(counter - 1)
       }
    }

    // For side effect of function notification 
    useEffect(() => {
        document.title = `Tech Store ${counter}`
    },[counter])

  return (
    <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-3xl">Counter: {counter}</h2>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={Increment}>Increment</button>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={Decrement}>Decrement</button>
      </div>
  )
}

export default UseEffectNotification
