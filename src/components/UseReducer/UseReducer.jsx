// Same as usestate but usereducer is more powerfull and more effecient than usestate
// useState for smaller app state management and useReducer for large app state management
// It takes two arguments one is reduer function and second one is initial value And in array [state, dispath]
// reducer function accept two parameters state and action
// we can write reducer function in this file but make seperate file for reducer function for best practices

import React, { useReducer, useState } from 'react'
import reducer from './reducer'

const UseReducer = () => {
    const initialValue = 0
    const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-3xl">Counter: {count}</h2>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={() => dispatch({ type: "INC"})}>Increment</button>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={() => dispatch({ type: "DEC"})}>Decrement</button>
      </div>
  )
}

export default UseReducer
