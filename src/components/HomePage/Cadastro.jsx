/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Link, Navigate } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import {FaArrowLeft} from 'react-icons/fa';
import NavBar from '../NavBar';
import { auth } from '../../services/firebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


export default function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleCadastro(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (loading) {
        console.log(user)
        return <Navigate to="/Dashboard" />
    }

    return (
        <div className="bg-background bg-no-repeat flex   min-h-screen  ">
                    <NavBar />
            
            
            <div className=' p-4 w-full my-auto bg-black/70 flex flex-col
                            sm:flex-row sm:items-center sm:justify-around '>

                {/* Aba Lateral com Imagem */}
                <div className=' flex justify-center text-center '>
                    
                    <div className="flex-col ">
                        
                        <div className='h-16 w-16 mx-auto
                            sm:h-32 sm:w-32 sm:my-4'>

                            <img src={Logo} alt="Logo" />
                        </div>

                        <p className='font-play text-2xl text-primaryBlue mt-2 '>
                            CODE SWAP
                        </p>

                        <div className=' text-center'>
                            <p className='text-white text-xl font-bold p-4 
                                            sm:text-4xl'>
                                Junte-se  <br /> a Comunidade
                            </p>
                        </div>

                        <Link to={'/Login'}>
                            <div className=' text-secondaryGreen font-semibold flex items-center'>
                                <span><FaArrowLeft/></span><span className='ml-4'>Voltar para Login</span>
                            </div>
                        </Link>

                    </div>

                </div>

                {/* Formulário */}
                <div className=' flex flex-col  bg-slate-600/60 rounded-2xl p-4 sm:w-96'>
                    
                    {/* Inputs */}
                    <div className=' flex flex-col '>
                        <input type="text" className='bg-black/70 rounded-xl mb-2 h-14 text-sm text-white sm:h-16 pl-4' placeholder={`Digite Seu nome`} />
                        {/* e-mail */}
                        <input onChange={e => setEmail(e.target.value)} type="text" className='bg-black/70 rounded-xl mb-2  h-14 text-sm text-white sm:h-16 pl-4' placeholder=' Digite Seu e-mail' />
                        {/* senha */}
                        <input onChange={e => setPassword(e.target.value)} type="password" className='bg-black/70 rounded-xl mb-2 h-14 text-sm text-white sm:h-16 pl-4' placeholder={`Digite sua senha`} />
                        <input type="password" className='bg-black/70 rounded-xl  h-14 text-sm text-white sm:h-16 pl-4' placeholder=' Repita sua senha' />  
                    </div>
                    {/* Botton Form */}
                    <div className='flex flex-col space-y-6 '>
                        <p className='text-white mt-2 text-xs sm:text-base text-center'>Ao se cadastrar você aceita nossos
                                    <span className='text-secondaryGreen font-semibold'> termos de uso </span>
                             e nossa <span className='text-secondaryGreen font-semibold'>politica de privacidade</span>
                        </p>
                        {/* Botao Cadastrar */}
                        <div className='bg-secondaryGreen/80 w-5/6 rounded-lg flex justify-center
                                            text-2xl font-bold mx-auto py-2 '>
                            <Link>
                                <button onClick={handleCadastro}>Cadastrar</button>
                            </Link>
                        </div>

                        <Link to={'/'}>
                            <p className='text-black font-bold text-xl text-center  bg-black/20 rounded-2xl  '>
                            Voltar para Home
                            </p>
                        </Link>
                    </div>

                </div>
 
            </div>

        </div>
    )
}