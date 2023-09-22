import React from 'react'
import RCC from '../assests/RCC.jpg'

function About() {

  return (
    <>
        <section id='about' className='lg:flex justify-between items-center  lg:px-10'>
            <section className='lg:w-[50%] '>
                <section className='text-sm px-5 md:text-lg'>
                    <h1 className='text-2xl pb-5 font-bold md:text-3xl'>About Bass Logic</h1>
                    <p className='py-2'>
                        Bass Logic is a website dedicated to teaching marching bass drum fundamentals to students who aspire to take their bass drumming skills to the next level. Our website offers comprehensive tutorials and guides that cover everything from tuning and muffling your bass drum to advanced techniques that can enhance your playing.
                    </p>
                    <p className='py-2'>
                        Our goal is to provide students with the resources they need to become skilled and confident bass drummers. We understand that many marching band programs often focus on snare drum and tenor drum techniques, leaving bass drummers with limited resources to improve their skills. That's why we created Bass Logic - to give bass drummers the attention and support they deserve.
                    </p>
                    <p className='py-2'>
                        Whether you are a beginner or an experienced bass drummer, our website has something to offer. From basic techniques to advanced concepts, our tutorials and guides are designed to help you improve your skills and take your playing to the next level.
                    </p>
                    <p>
                        Thank you for choosing Bass Logic as your go-to resource for marching bass drumming. We hope that our website will help you achieve your goals and become a skilled and confident bass drummer.
                    </p>
                </section>
            </section>

            <section className='px-3 pt-4'>
                <img src={RCC} alt="" className='rounded-[25px] lg:w-[80%] mx-auto' />
            </section>
        </section>
    </>
  )
}

export default About