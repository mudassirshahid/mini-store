import React, { useEffect, useState } from "react";
import UseEffectProps from "./UseEffectProps";

function UseEffectRevision() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  //using props useEffect
  const [propscount, setPropsCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect called for Data");
  },[data]); // [] this dependency array used for condition like this useeEffect call for like which state ? 
  
  //for call count
  useEffect(() => {
    console.log('"UseEffect called for Count"')
  },[count])
  
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <h2>Count: {count}</h2>
        <h2>Data: {data}</h2>
        <UseEffectProps  propscount={propscount}/>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
        <button onClick={() => setData(data + 1)}>Update Data</button>
        <button onClick={() => setPropsCount(propscount + 1)}>Update Props Data</button>
      </div>
    </>
  );
}

export default UseEffectRevision;
