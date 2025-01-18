//Controlled  component controlled using state 
import React, { useState } from 'react'

function Controlled() {
    const [val, setVal] = useState("");
    const [item, setItem] = useState("")

    const handleVal = (e) => {
        setVal(e.target.value)
    }

    const handleItem = (e) => {
        setItem(e.target.value)
    }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 my-3 text-center">
      <h2 className='text-2xl'>Controlled Component</h2>
        <input className="p-1 border border-teal-300" type="text"  value={val} onChange={handleVal}/>
        <input className="p-1 border border-teal-300" type="text"  value={item} onChange={handleItem}/>
        <h2>Value: {val}</h2>
        <h2>Item: {item}</h2>
      </div> 
    </>
  )
}

export default Controlled
