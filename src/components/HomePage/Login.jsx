import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import googleLogo from '../../assets/img/googleLogo.png';
import gitLogo from '../../assets/img/gitLogo.png';


export default function Login() {
    return (
        <div className="bg-background bg-no-repeat flex   min-h-screen  ">

            
            
            <div className=' p-4 w-full my-auto bg-black/70 flex flex-col
                            sm:flex-row sm:items-center sm:justify-around '>

                {/* Aba Lateral */}
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
                                Faça seu login <br /> na plataforma
                            </p>
                        </div>

                    </div>

                </div>


                {/* Formulário */}
                
                <div className=' flex flex-col  bg-slate-600/60 rounded-2xl p-4 sm:w-96'>
                    
                    {/* Inputs */}
                    <div className=' flex flex-col '>
                        <input type="text" className='bg-black/70 rounded-xl mb-4 h-14 text-sm text-white sm:h-16 pl-4' placeholder={`Digite Seu e-mail`} />
                        <input type="password" className='bg-black/70 rounded-xl  h-14 text-sm text-white sm:h-16 pl-4' placeholder=' Digite sua senha' />
                        <p className='text-secondaryGreen font-bold'>Esqueci minha senha</p>

                    </div>
                    {/* Botao Entrar */}
                    <div className='bg-secondaryGreen/80 w-5/6 rounded-lg flex justify-center
                                        text-2xl font-bold mx-auto py-2 mt-4'>
                        <Link><button>Entrar</button></Link>
                    </div>
                    {/* Registre-se */}
                    <p className=' mt-4 flex justify-between  
                                mx-auto font-bold text-white text-xs'>
                        Não tem conta?
                        <Link to={'/Cadastro'}>
                            <span className='text-secondaryGreen ml-2'>
                                Registre-se
                            </span>
                        </Link>
                    </p>
                    {/* Login Alternativo */}
                    <div className='flex flex-col items-center mt-6 relative'>
                        <p className='text-white font-bold'>ou entre com</p>
                        <div className='flex gap-4'>
                            <button>
                                <img src={googleLogo} alt="" width={50} />
                            </button>
                            <button>
                                <img src={gitLogo} alt="" width={42} />
                            </button>
                        </div>
                    </div>

                    <Link to={'/'}>
                        <p className='text-black font-bold text-xl text-center mt-8 bg-black/20 rounded-2xl  '>
                        Voltar para Home
                        </p>
                    </Link>

                </div>


                
            </div>






        </div>
    )
}