import React, {useState} from 'react'
import logo2 from '../assests/logo2.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import CoolMenuButton from './CoolMenuButton';


function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    }

    const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-white transition ease transform duration-300`;


  return (
    <>
        <header>
            <section className='realtive border-b'>
                <section className='px-3 lg:container mx-auto'>
                    <section className='flex justify-between items-center'>
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
                        <CoolMenuButton isOpen={isOpen} onClick={handleClick} genericHamburgerLine={genericHamburgerLine}/>

                        {/* Mobile View */}
                        <section className={isOpen ? 'fixed top-0 left-0 border-b border-b-white w-full  shadow-2xl h-[50%] bg-[#0e2729]' : 'fixed top-[-100%]' }>
                                <section className='flex justify-between items-center px-3'>
                                    <section>
                                        <img src={logo2} className='max-w-[5.5rem]' />
                                    </section>
                                    <CoolMenuButton isOpen={isOpen} onClick={handleClick} genericHamburgerLine={genericHamburgerLine}/>                      
                                </section>

                                <ul className='space-y-4 pl-6 w-[10rem] pt-8'>
                                    <li className='hover:underline hover:cursor-pointer hover:scale-110 text-xl'><a href="#"></a>Home</li>
                                    <li className='hover:underline hover:cursor-pointer hover:scale-110 text-xl'><a href="#"></a>About</li>
                                    <li className='hover:underline hover:cursor-pointer hover:scale-110 text-xl'><a href="#"></a>Reseources</li>
                                </ul>
                        </section>


                    </section>
                </section>
            </section>
        </header>
    </>
  )
}

export default NavigationBar

