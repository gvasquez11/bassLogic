import React from 'react'
import Typed from 'react-typed'
import bassdrum from '../assests/bassdrum.png'

function Hero() {
  return (
    <>
      <section className="flex flex-col items-center space-y-5 h-screen my-[-100px] pt-[7rem] text-2xl text-center lg:flex-row lg:justify-center lg:text-4xl">
        <section className=''>
          <img src={bassdrum} alt="" className='rounded-[25px] w-[80%] mx-auto'/>
        </section>
        <section className=' '>
          <h1>Master marching Bass Drum with <span className='font-bold  '>Bass Logic</span></h1>
          <section className=''>
            <h2>What you'll learn with Bass Logic</h2>
            <Typed
            className='font-bold text-3xl  lg:text-5xl'
              strings={['Technique', 'Advanced Rhythms', 'Tunning', 'Muffling']}
              typeSpeed={90}
              backSpeed={60}
              loop
            />
          </section>
        </section>
      </section>
    </>
  )
}

export default Hero