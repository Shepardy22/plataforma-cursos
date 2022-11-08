import Logo from '../assets/img/Logo.png';
import {FaBars, FaWindowClose} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { useState } from 'react';

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

     
    


    return (
        <>
            

        <div className="h-24  w-full fixed top-0 z-50
            backdrop-opacity-10 backdrop-invert bg-black/70 
            flex justify-between  items-center
            ">
            <Link to={'/'}><img src={Logo}alt="Logo" className='' width={90}/></Link>
            {/* Menu Desktop */}
            <div className=' flex mx-auto w-full'>
                <ul className='text-white hidden sm:flex w-full justify-around text-xl'>
                    <li className='hover:text-primaryBlue '><Link to="/">Home</Link></li>
                    <li className='hover:text-primaryBlue '><Link to="/Carreiras">Carreiras</Link></li>
                    <li className='hover:text-primaryBlue '><Link to="/Metodologia">Ensino</Link></li>
                    <li className='hover:text-primaryBlue '><Link to="/Comunidade">Comunidade</Link></li>

                    <div className='flex '>
                        <li className=''>
                            <button className='font-semibold bg-primaryBlue
                                hover:bg-secondaryGreen hover:text-primaryBlue
                             rounded-3xl w-24 h-8 text-secondaryGreen '>
                                    Login
                            </button>
                        </li>
                        <li className=''>
                            <button className='font-semibold bg-primaryBlue 
                            hover:bg-secondaryGreen hover:text-primaryBlue
                            rounded-3xl w-32 h-8 text-secondaryGreen ml-8'>
                                    Cadastrar
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
            
            {/* Botao Hamburguer */}
            <div>
                <button className=' rounded-xl h-14 w-14 mr-4 text-secondaryGreen
                    flex justify-center 
                    items-center text-4xl
                    bg-secondaryGreen
                    backdrop-opacity-10 backdrop-invert bg-primaryBlue/5
                    sm:hidden'
                    onClick={toggleMenu}>
                    <FaBars/>
                </button>
            </div>

        </div>
        {/* Menu Mobile */}
        <div className= {`${showMenu ? '':'hidden'}
            z-50    
            sm:hidden fixed top-0 right-0 w-8/12 h-4/6
           bg-black/90
            border border-secondaryGreen rounded-l-3xl
            flex justify-center`}>
            <button className=' rounded-xl h-14 w-14 mr-4 text-secondaryGreen 
                fixed top-5 right-0
                flex justify-center
                items-center text-4xl
                bg-secondaryGreen
                backdrop-opacity-10 backdrop-invert bg-primaryBlue/5
                sm:hidden'
                onClick={toggleMenu}>
                <FaWindowClose/>

            </button>
            {/* lista Menu */}
            <div className=' w-full '>
                <ul className='text-white mt-20  text-3xl text-center '>
                    <li className='mb-4  hover:text-primaryBlue'><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li className='mb-4 hover:text-primaryBlue'> <Link to="/Carreiras" onClick={toggleMenu}>Carreiras</Link></li>
                    <li className='mb-4 hover:text-primaryBlue'> <Link to="/Metodologia" onClick={toggleMenu}>Ensino</Link></li>
                    <li className='mb-4 hover:text-primaryBlue'> <Link to="/Comunidade"onClick={toggleMenu}>Comunidade</Link></li>
                    <li className='mb-4 hover:text-primaryBlue text-xl mt-6'>
                        <a href="/">
                            <button className='font-semibold h-10 bg-primaryBlue rounded-3xl w-32 text-secondaryGreen '>
                                Login
                            </button>
                        </a>
                    </li>
                    <li className=' mb-2 hover:text-primaryBlue text-xl  mt-6'>
                        <a href="/">
                            <button className='text-shadow-xl font-semibold h-10 mt-2 bg-primaryBlue rounded-3xl w-32 text-secondaryGreen '>
                                Cadastrar
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
        
            
            
        
        
        
        
    );
}