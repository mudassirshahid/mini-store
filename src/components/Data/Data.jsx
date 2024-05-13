import React, { useState } from "react";

function Data() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Mudassir");
    const [swapname, setSwapname] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Third state variable


    const Increment = () => {
        setCounter(counter + 1)
    }

    const Decrement = () => {
       if(counter > 0) {
        setCounter(counter - 1)
       }
    }

    const handleClick = () => {
        setName(swapname ? "Mudassir" : "Mudassir Shahid")
        setSwapname(!swapname)
    }
  
    
  const students = [
    {
      name: "mudassir",
      rollNo: 1,
      email: "mudassirshahid84@gmail.com",
    },
    {
      name: "mudassir",
      rollNo: 2,
      email: "mudassirshahid84@gmail.com",
    },
    {
      name: "mudassir",
      rollNo: 3,
      email: "mudassirshahid84@gmail.com",
    },
    {
      name: "mudassir",
      rollNo: 4,
      email: "mudassirshahid84@gmail.com",
    },
  ];
  return (
    <>
      {students.map((student) => (
          <div
            className="flex justify-center items-center"
            key={student.rollNo}
          >
            <ul className="flex gap-10">
              <li>Name: {student.name}</li>
              <li>Roll No: {student.rollNo}</li>
              <li>Email: {student.email}</li>
            </ul>
          </div>
      ))}

      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-3xl">Counter: {counter}</h2>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={Increment}>Increment</button>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={Decrement}>Decrement</button>
        <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={handleClick}>{name}</button>
        {isVisible && <p>This text is visible.</p>}
            <button className="bg-slate-400 p-3 rounded-lg my-2" onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>
      </div>
    </>
  );
}

export default Data;
