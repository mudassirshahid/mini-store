import React, { useEffect } from 'react'

function UseEffectProps(props) {
    useEffect(() => {
        console.log(`Props Count is: ${props.propscount}`);
    },[props.propscount])
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <h2>Props Count: {props.propscount}</h2>
      </div>
    </>
  )
}

export default UseEffectProps
