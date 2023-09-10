import React, {useState} from 'react'
import logo2 from '../assests/logo2.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


function NavigationBar() {

    const [nav, setNav] = useState(false);

    function handleNav(){
        setNav(!nav)
    }

  return (
    <>
        <nav className='flex justify-between items-center px-4 bg-[#0e2729] border-b border-b-white shadow-2xl '>
            <section>
                <img src={logo2} className='max-w-[5.5rem]' />
            </section>
            <section className='hidden md:flex'>
                <ul className='flex space-x-4'>
                    <li className='hover:underline hover:scale-110 hover:cursor-pointer'><a href="" ></a>Home</li>
                    <li className='hover:underline hover:scale-110 hover:cursor-pointer'><a href=""></a>About</li>
                    <li className='hover:underline hover:scale-110 hover:cursor-pointer'><a href=""></a>Resources</li>
                </ul>
            </section>
            <section onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
            </section>

            <section className={!nav ? 'fixed top-0 left-0 h-[60%] bg-[#0e2729] w-full space-y-5 shadow-2xl' : 'fixed left-[-100%]'}>
                <section className='border-b border-b-white flex justify-between items-center'>
                    <section className='pl-4'><img src={logo2} className='max-w-[5.5rem]' />
                    </section>

                    <section onClick={handleNav} className='block pr-[1rem]'>
                        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
                    </section>
                </section>
                <ul className='pl-8 space-y-6 w-[30%]'>
                    <li className='hover:underline hover:scale-105 hover:inlineblock hover:cursor-pointer'><a href="" ></a>Home</li>
                    <li className='hover:underline hover:scale-110 hover:cursor-pointer'><a href=""></a>About</li>
                    <li className='hover:underline hover:scale-110 hover:cursor-pointer'><a href=""></a>Resources</li>
                </ul> 
            </section>
        </nav>
    </>
  )
}

export default NavigationBar