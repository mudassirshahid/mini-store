import React, { lazy, Suspense } from 'react'
// import FormData from '../FormData/FormData'
const FormData = lazy(() => import('../FormData/FormData'))  // In lazy load if you want to add lazy loading on component Import component like this
const Blog = lazy(() => import('../Blog/Blog'))  // In lazy load if you want to add lazy loading on component Import component like this

const LazyLoading = () => {
  return (
    <>
      <h1 className='text-center text-3xl my-5 animate-pulse'>Lazy Loading</h1>
      <Suspense fallback={<div>Please Wait...</div>}>
      <FormData />
      </Suspense> 
      {/* can add multiple suspense on multiple components  */}
      <Suspense fallback={<div>Please Wait Blog is Loading...</div>}>
      <Blog />
      </Suspense> 
    </>
  )
}

export default LazyLoading
