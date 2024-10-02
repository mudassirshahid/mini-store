import React, { useEffect, useState } from 'react'

const CleanUp = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width)

    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);
        // For CleanUp 
        return () => {
            window.removeEventListener("resize", currentScreenWidth);
        }
    })
  return (
    <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-3xl">The size of the window is <span className='text-sky-800'>{widthCount}</span></h2>
    </div>
  )
}

export default CleanUp
