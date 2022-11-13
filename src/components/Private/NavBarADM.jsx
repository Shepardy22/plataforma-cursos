import React, {  useContext, useState } from 'react';
import userFoto from '../../assets/img/user.png';

import Logo from '../../assets/img/Logo.png';
import { FaBars, FaBell, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authVerify';


export default function NavBarADM() {

    const photoUser =localStorage.getItem("@AuthFirebase:Photo");


    const {signOut} = useContext(AuthContext);

    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    const [showMenuDesk, setShowMenuDesk] = useState(false);
    function toggleMenuDesk() {
        setShowMenuDesk(!showMenuDesk);
    }

    return (
        <>
            <div className={`h-16  w-full  top-0 z-50    absolute      
              
             
            backdrop-opacity-10 backdrop-invert bg-black/70 
            flex justify-between  items-center
            `}>
                <Link to={'/'}><img src={Logo} alt="Logo" className='ml-2' width={50} /></Link>
                {/* Menu Desktop */}
                <div className=' flex mx-auto w-full '>
                    <ul className='text-white hidden sm:flex w-full justify-around text-lg items-center'>
                        <li className='hover:text-primaryBlue '><Link to="/Dashboard">Home</Link></li>
                        <li className='hover:text-primaryBlue '><Link to="/Carreiras">Cursos</Link></li>
                        <li className='hover:text-primaryBlue '><Link to="/AdmUser">Configuraçoes</Link></li>
                        <li className='text-secondaryGreen hover:text-primaryBlue '><Link to="/AdmUser">Usuarios</Link></li>
                        <li className='text-red-500 hover:text-primaryBlue font-bold '><Link to="/AdmUser">Área ADM</Link></li>

                        
                        
                        <div className='flex items-center '>
                            <span className='mr-4 mt-8'><FaBell /></span>
                            <button onClick={toggleMenuDesk}>
                                <div className='rounded-full h-12 w-12  border border-primaryBlue'>
                                    {photoUser ? (<img src={photoUser} alt="Perfil" className='rounded-full ' />) :
                                        (<img src={userFoto} alt="Foto " className='rounded-full bg-white' />)}
                                </div>
                            </button>

                            {/* menu Desktop */}
                            <div className= {`${showMenuDesk ? '' : 'hidden'} h-28 rounded-b-2xl w-44 -ml-6 bg-black/70 
                                mt-16 flex flex-col items-center  top-0 absolute`}>
                                
                                <Link to={'/Login'}>
                                    <h1 className='text-white mt-4 hover:text-primaryBlue'>Minha Conta</h1>
                                </Link>

                                <Link to={"/"} >
                                    <button onClick={signOut} className='font-semibold h-6 mt-6  bg-primaryBlue
                                    hover:bg-secondaryGreen hover:text-primaryBlue rounded-3xl w-28 text-secondaryGreen '>
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
            sm:hidden fixed top-0 right-0 w-8/12 
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
                        <li className='mb-4 hover:text-primaryBlue'> <Link to="/Carreiras" onClick={toggleMenu}>Cursos</Link></li>
                        <li className='mb-4 hover:text-primaryBlue'> <Link to="/AdmUser" onClick={toggleMenu}>Configuraçoes</Link></li>
                        <li className='mb-4 text-secondaryGreen hover:text-primaryBlue'> <Link to="/AdmUser" onClick={toggleMenu}>Usuarios</Link></li>
                        <li className='mb-4 text-red-500 hover:text-primaryBlue font-bold '><Link to="/AdmUser">Área ADM</Link></li>
                        <li className='mt-10 hover:text-primaryBlue text-xl  '>
                            <Link to={"/"} >
                                <button onClick={signOut} className='mb-4 font-semibold h-10 bg-primaryBlue rounded-3xl w-32 text-secondaryGreen '>
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