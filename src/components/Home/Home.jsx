import React, { useContext, useState, lazy, Suspense } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
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
import ApiCall from '../ApiCall/ApiCall.jsx'
import FormData from '../FormData/FormData.jsx'
import UseEffectNotification from '../UseEffect/UseEffectNotification.jsx'
import CleanUp from '../UseEffect/CleanUp.jsx'
import UseReducer from '../UseReducer/UseReducer.jsx'
import UseLayoutEffect from '../UseLayoutEffect/UseLayoutEffect.jsx'
import UserContext from '../UserContext/UserContext.jsx'
import UseCallBack from '../UseCallBack/UseCallBack.jsx'
import LazyLoading from '../LazyLoading/LazyLoading.jsx'
import ProductList from '../ProductList/ProductList.jsx'
import LoginApi from '../LoginApiAxios/LoginApi.jsx';
import PrelineButton from '../PrelineComponents/PrelineButton.jsx';
import PrelineCard from '../PrelineComponents/PrelineCard.jsx';

function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
    {/* <PrelineButton /> */}
    {/* <PrelineCard /> */}
    <LoginApi />
    {/* <ProductList /> */}
       {/* <Carousel /> */}
      {/*<UseCallBack /> */}
      {/* <UserContext /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseReducer /> */}
      {/* <CleanUp /> */}
      {/* <UseEffectNotification /> */}
      {/* <FormData /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <Controlled /> */}
      {/* <UnControlled />     */}
      {/* <Hoc /> */}
      {/* <UseEffectRevision /> */}
      {/* <UseMemo /> */}
      {/* <Data /> */}
      {/* <Form /> */}
      {/* <ApiCall /> */}
      {/* <LazyLoading /> */}
    </>
  )
}

export default Home
