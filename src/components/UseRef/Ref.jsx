//Ref directly can manipulate DOM menwhile React don't manipulate DOM
//Use Ref only in emergency like when it is needed to use or without this your work can't done and don't use multiple Ref in react app
//Fo example in form to get value of fieldsand chnage field color/focus etc
//Ref use with class component and useRef use with function component both usecase same
import React, { useRef } from "react";

function UseRef() {
  const InputRef = useRef(null);

  const Value = "useRef";

  const HandleInput = () => {
    console.log("Clicked");
    const val = InputRef.current.value
    console.log(val);
    InputRef.current.focus(); //
    InputRef.current.style.color = "red"
    // InputRef.current.style.backgroundColor = "black"
    // InputRef.current.style.display = "none"
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <h2 className="text-3xl my-3">{Value} in React</h2>
        <input 
        className="p-1 border border-teal-300" 
        type="text"
        ref={InputRef} 
        />
        <button
          className="bg-slate-500 text-slate-50 px-4 py-2 border rounded-sm w-fit"
          onClick={HandleInput}
        >
          Handle Input
        </button>
      </div>
    </>
  );
}

export default UseRef;
