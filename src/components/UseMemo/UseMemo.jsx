// useMemo used for enhanced performance and controlled re rendering/check same rendering 
// The React useMemo Hook returns a memorized value.
// The React useCallback Hook returns a memorized callback function.

import React,{useState, useMemo} from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);
    
    //Without useMemo this function re render whenever update state
    // const multiCount = () => {
    //     console.log("multicount");
    //     return count * 5
    // }

    //With useMemo
    const multiCountMemo = useMemo(function multiCount() {
        console.log("multicount");
        return count * 5
    },[count]) //[] this is dependency where we set condition like when to call this function to avoid unnecassary re render. For now we use this func for count state and it will run only when count state update.  

    
  return (
    <>
    <div className="flex flex-col justify-center text-center">
      <h2>Count: {count}</h2>
      <h2>Data: {data}</h2>
      {/* Without useMemo */}
      {/* <h2>{multiCount()}</h2> */}
      {/* With useMemo  */}
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data * 10)}>Update Data</button>
    </div>
  </>
  )
}

export default UseMemo
