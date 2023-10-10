import React, {useState} from 'react'
import logo2 from '../assests/logo2.png'
import CoolMenuButton from './CoolMenuButton';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


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
                <section className='px-6'>
                    <section className='flex justify-between items-center'>
                        <section>
                            <Link to="/">
                            <img src={logo2} className='max-w-[5.5rem]' /></Link>
                        </section>

                        <section className='hidden md:flex'>
                            <ul className='flex space-x-4'>
                                {/* <li className='hover:underline hover:scale-110 hover:cursor-pointer md:text-2xl'><a href="" ></a>Home</li> */}
                                <Link to="/" className='hover:underline hover:scale-110 hover:cursor-pointer md:text-2xl'>Home</Link>

                                <li className='hover:underline hover:scale-110 hover:cursor-pointer md:text-2xl'>
                                    <HashLink smooth to="/#about">About</HashLink>
                                </li>

                                <li className='hover:underline hover:scale-110 hover:cursor-pointer md:text-2xl'>
                                    <HashLink smooth to="/#resources">
                                    Resources
                                    </HashLink>
                                </li>
                            </ul>
                        </section>
                        <CoolMenuButton isOpen={isOpen} onClick={handleClick} genericHamburgerLine={genericHamburgerLine}/>

                        {/* Mobile View */}
                        <section className={isOpen ? 'fixed top-0 left-0 border-b border-b-white w-full shadow-2xl h-[50%] bg-[#0e2729] ease-in-out duration-500' : 'fixed top-[-100%] left-0 border-b border-b-white w-full h-[50%] bg-[#0e2729] duration-500 ease-in-out' }>
                                <section className='flex justify-between items-center px-6'>
                                    <section>
                                        <img src={logo2} className='max-w-[5.5rem]' />
                                    </section>
                                    <CoolMenuButton isOpen={isOpen} onClick={handleClick} genericHamburgerLine={genericHamburgerLine}/>                      
                                </section>

                                <ul className='space-y-4 pl-6 w-[10rem] pt-8'>
                                    <li className='hover:underline hover:cursor-pointer hover:scale-110 text-xl'>
                                        <Link to="/" className='hover:underline hover:scale-110 hover:cursor-pointer md:text-2xl' onClick={handleClick}>Home</Link>
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer hover:scale-110 text-xl'>
                                        <HashLink smooth to="/#about" onClick={handleClick}>About</HashLink>
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer hover:scale-110 text-xl'>
                                        <HashLink smooth to="/#resources" onClick={handleClick}>
                                        Resources
                                        </HashLink>
                                    </li>
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

