//forwardRef itself a wrapper and the syntax is to export like this export default forwardRef(ForwadRefChild); and it takes two props first one is simple props and second one is for this like props,ref second one is ref

import React,{forwardRef} from 'react'

function ForwadRefChild(props,ref) {
  return (
    <>
        <input 
        className="p-1 border border-teal-300" 
        type="text" 
        ref={ref}
        />
    </>

  )
}

export default forwardRef(ForwadRefChild); 
