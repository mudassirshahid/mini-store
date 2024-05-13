import React from 'react'
import Carousel from '../Utils/CustomCarousel'
import Data from '../Data/Data.jsx'
import Form from '../Form/Form.jsx'
import UseEffect from '../UseEffect/UseEffectAPI.jsx'
import UseEffectRevision from '../UseEffect/UseEffectRevision.jsx'
import UseMemo from '../UseMemo/UseMemo.jsx'
import UseRef from '../UseRef/Ref.jsx'
import ForwardRef from '../ForwardRef/ForwardRef.jsx'
import Controlled from '../Controlled/Controlled.jsx'
import UnControlled from '../UnControlled/UnControlled.jsx'
import Hoc from '../HOC/Hoc.jsx'


function Home() {
  return (
    <>
      <Carousel />
      <UseEffect />
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <Controlled /> */}
      {/* <UnControlled /> */}
      <Hoc />
      {/* <UseEffectRevision /> */}
      {/* <UseMemo /> */}
      <Data />
      <Form />
    </>
  )
}

export default Home
