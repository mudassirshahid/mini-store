//HOC component work like as props component
import React, { useState } from 'react'

function Hoc() {
  return (
    <>
      <HocRed Comp={Counter} />
      <HocGreen Comp={Counter} />
      <HocBlue Comp={Counter} />
    </>
  )
}

function HocRed(props) {
    return (
      <>
        <h2 className='bg-red-600 text-center text-xl py-2'>Red<props.Comp /></h2>
      </>
    )
  }

  function HocGreen(props) {
    return (
      <>
        <h2 className='bg-green-600 text-center text-xl py-2'>Green<props.Comp /></h2>
      </>
    )
  }

  function HocBlue(props) {
    return (
      <>
        <h2 className='bg-blue-600 text-center text-xl py-2'>Blue<props.Comp /></h2>
      </>
    )
  }


function Counter() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h2 className="text-2xl">Counter Value: {count}</h2>
            <button className="bg-gray-950 text-slate-50 hover:bg-slate-50 hover:text-gray-950 px-6 py-2 border rounded-md w-fit duration-200" onClick={handleCount}>Update</button>
        </div>
      </>
    )
  }

export default Hoc
