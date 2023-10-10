import React from 'react'
import NavigationBar from '../components/NavigationBar'
import logo from '../assets/logo2.png'

function Extra() {
  return (
    <>
      <NavigationBar />
      <h1 className='text-lg text-center md:text-3xl'>Section Coming soon</h1>
      <img className="md:w-[25%] md:mx-auto" src={logo} alt="" />
    </>
  )
}

export default Extra