// To access this file functionality all over the app/component wrap all routes that you make in main file in this component like this <NoteState>Your routes data</NoteState> this is all possible with the help of context api usecontext hook.
import React from 'react'
import NoteContext from "./noteContext"

function NoteState(props) {
    const state = {
        name: "Mudassir",
        designation: "Software Engineer"
    }
  return (
    <NoteContext.Provider value={state}>
     {props.children} 
    </NoteContext.Provider>
  )
}

export default NoteState
