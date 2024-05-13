//forwardRef advanced version of Ref and it is used as props pass data child to parent
import React,{useRef} from 'react'
import ForwadRefChild from './ForwadRefChild';

function ForwardRef() {

  const inputRef = useRef(null);

  const Value = "ForwardRef";

  const updateInput = () => {
    console.log("Clicked");
    const val = inputRef.current.value
    console.log(val);
    inputRef.current.focus(); //
    inputRef.current.style.color = "red"
    // inputRef.current.style.backgroundColor = "black"
    // inputRef.current.style.display = "none"
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <h2 className="text-3xl my-3">{Value} in React</h2>
        <ForwadRefChild ref={inputRef}/> 
        {/* props name should be same as ref */}
        <button
          className="bg-slate-500 text-slate-50 px-4 py-2 border rounded-sm w-fit"
          onClick={updateInput}
        >
          Update InputBox
        </button>
      </div>
    </>
  )
}

export default ForwardRef;
