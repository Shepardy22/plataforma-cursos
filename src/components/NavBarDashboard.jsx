import React, { useState } from 'react';

import Logo from '../assets/img/Logo.png';
import { FaBars, FaBell, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function NavBarDashboard() {

    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    const [showMenuDesk, setShowMenuDesk] = useState(false);
    function toggleMenuDesk() {
        setShowMenuDesk(!showMenuDesk);
    }



    // const location = useLocation();
    // const [loc, setLoc] = useState(location.pathname);

    //     useEffect(() => {
    //         setLoc(location.pathname);
    //     }, [location.pathname]);

    return (
        <>
            <div className={`h-24  w-full fixed top-0 z-50          
              
             
            backdrop-opacity-10 backdrop-invert bg-black/70 
            flex justify-between  items-center
            `}>
                <Link to={'/'}><img src={Logo} alt="Logo" className='' width={90} /></Link>
                {/* Menu Desktop */}
                <div className=' flex mx-auto w-full '>
                    <ul className='text-white hidden sm:flex w-full justify-around text-xl items-center'>
                        <li className='hover:text-primaryBlue '><Link to="/">Home</Link></li>
                        <li className='hover:text-primaryBlue '><Link to="/Carreiras">Bootcamps</Link></li>
                        <li className='hover:text-primaryBlue '><Link to="/Metodologia">Salas</Link></li>
                        <li className='text-secondaryGreen hover:text-primaryBlue '><Link to="/Comunidade">Swap Pro</Link></li>

                        <div className='flex items-center '>
                            <span className='mr-4 mt-8'><FaBell /></span>
                            <button onClick={toggleMenuDesk}>
                                <div className='rounded-full h-16 w-16  border border-primaryBlue'>
                                    <img src="https://avatars.githubusercontent.com/u/102148711?v=4" alt="Foto de perfil" className='rounded-full ' />
                                </div>
                            </button>

                            {/* menu Desktop */}
                            <div className= {`${showMenuDesk ? '' : 'hidden'} h-28 rounded-b-2xl w-44 -ml-6 bg-black/70 
                                mt-24 flex flex-col items-center  top-0 absolute`}>
                                
                                <Link to={'/Login'}>
                                    <h1 className='text-white mt-4 hover:text-primaryBlue'>Minha Conta</h1>
                                </Link>

                                <Link to={'/Login'} >
                                    <button className='font-semibold h-8 mt-6  bg-primaryBlue
                                    hover:bg-secondaryGreen hover:text-primaryBlue rounded-3xl w-32 text-secondaryGreen '>
                                        Sair
                                    </button>
                                </Link>
                            </div>

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
                        <FaBars />
                    </button>
                </div>

            </div>
            {/* Menu Mobile */}
            <div className={`${showMenu ? '' : 'hidden'}
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
                    <FaWindowClose />

                </button>
                {/* lista Menu */}
                <div className=' w-full '>
                    <ul className='text-white mt-20  text-3xl text-center '>
                        <li className='flex justify-center -mt-8 mb-6'>
                            <div className='rounded-full h-16 w-16  border border-primaryBlue'>
                                <img src="https://avatars.githubusercontent.com/u/102148711?v=4" alt="Foto de perfil" className='rounded-full ' />
                            </div>
                        </li>
                        <li className='mb-4  hover:text-primaryBlue'><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li className='mb-4 hover:text-primaryBlue'> <Link to="/Carreiras" onClick={toggleMenu}>Bootcamps</Link></li>
                        <li className='mb-4 hover:text-primaryBlue'> <Link to="/Metodologia" onClick={toggleMenu}>Salas</Link></li>
                        <li className='mb-4 text-secondaryGreen hover:text-primaryBlue'> <Link to="/Comunidade" onClick={toggleMenu}>Swap Pro</Link></li>
                        <li className='mb-4  hover:text-primaryBlue'> <Link to="/Comunidade" onClick={toggleMenu}>Minha Conta</Link></li>

                        <li className='mt-16 hover:text-primaryBlue text-xl  '>
                            <Link to={'/Login'} >
                                <button className='font-semibold h-10 bg-primaryBlue rounded-3xl w-32 text-secondaryGreen '>
                                    Sair
                                </button>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>







    );
}