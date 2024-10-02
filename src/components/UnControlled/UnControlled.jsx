//UnControlled component directly controlled through JS or Ref and can't controlled using state
import React, { useMemo, useRef } from "react";

function UnControlled() {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null)

    // const handleSubmitMemo = useMemo(function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(`Input Value one is: ${inputRef.current.value}`);
    // },[inputRef])

    const handleSubmit = (e) => {
        e.preventDefault()
        //Using Ref
        console.log(`Input Value one is: ${inputRef.current.value}`);
        console.log(`Input Value two is: ${inputRef2.current.value}`);
        //Using Variable/DOM/ID
        let input3 = document.getElementById("input3").value
        console.log(`Input Value three is: ${input3}`);
    }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 my-3 text-center">
        <h2 className="text-2xl">UnControlled Component</h2>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
          <input
            className="p-1 border border-teal-300"
            type="text"
            ref={inputRef}
          />
          <input
            className="p-1 border border-teal-300"
            type="text"
            ref={inputRef2}
          />
           <input
            className="p-1 border border-teal-300"
            type="password"
            id="input3"
          />
          <button className="bg-slate-500 text-slate-50 px-4 py-2 border rounded-sm w-fit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default UnControlled;
