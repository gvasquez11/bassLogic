import React from 'react'
import tune from '../assests/tune.jpg'
import foam from '../assests/foam.jpg'
import sheetMusic from '../assests/sheetMusic.jpg'
import schedule from '../assests/schedule.jpg'
import { Link } from "react-router-dom";

function Resources() {
  return (
    <>
        <section id='resources' className='pt-[8rem] text-sm px-5 lg:px-16 md:text-lg'>
            <section>
                <h1 className='text-2xl pb-5 font-bold md:text-3xl'>Resources</h1>
                <p>
                    At Bass Logic, we offer a variety of resources to help you improve your marching bass drumming skills. Here are some of the resources you'll find on our website:
                </p>
            </section>

            <section className='pt-4 lg:flex '>
                <section className='lg:px-10 lg:text-center'>
                    <section className='py-6'>
                        <section>
                            <h1 className='font-bold'>Bass Tunning</h1>
                        </section>
                        <section>
                            <Link to="/tunning"><img src={tune} alt="Bass Tunning" className='w-[100%] lg:w-[70%] mx-auto' /></Link>
                        </section>
                    </section>
                    <section className='py-6'>
                        <section>
                            <h1 className='font-bold'>How to prroperly muffle your bass drums</h1>
                        </section>
                        <section>
                            <Link to="/muffling">
                                <img src={foam} alt="Bass Muffling" className='w-[100%] lg:w-[70%] mx-auto' />                       
                            </Link>
                        </section>
                    </section>
                </section>
                <section className=' lg:text-center'>
                    <section className='py-6'>
                        <section>
                            <h1 className='font-bold'>Sheet Music</h1>
                        </section>
                        <section>
                            <Link to="/sheet-music">
                                <img src={sheetMusic} alt="Sheet Music" className='w-[100%] lg:w-[70%] mx-auto' />
                            </Link>
                        </section>
                    </section>
                    <section className='py-6'>
                        <section>
                            <h1 className='font-bold'>Extra</h1>
                        </section>
                        <section>
                            <Link to="/extra">
                                <img src={schedule} alt="Extra" className='w-[100%] lg:w-[70%] mx-auto' />
                            </Link>
                        </section>
                    </section>
                </section>
            </section>

        </section>
    </>
  )
}

export default Resources