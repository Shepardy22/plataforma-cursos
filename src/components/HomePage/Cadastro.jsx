import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

export default function Login() {
    return (
        <div className="bg-background bg-no-repeat flex flex-col bg-cover h-screen w-screen ">
            <div className=" bg-black/70  h-full my-24  ">

                <div className=" flex flex-col  h-full sm:flex-row sm:w-full  ">

                    {/* Aba Lateral */}
                    <div className="  h-2/6 sm:w-full sm:h-full justify-center sm:order-1
                        flex flex-col items-center ">
                        <div className='h-16 w-16 mt-4
                           sm:h-48 sm:w-48  '>
                            <img src={Logo} alt="Logo" />
                        </div>

                        <p className='font-play text-2xl text-primaryBlue m-2
                            sm:text-6xl sm:m-6'>
                            CODE SWAP
                        </p>

                        <div className='w-2/3 text-center'>
                            <p className='text-white text-xl 
                                sm:text-3xl font-bold'>
                                Faça seu login na plataforma
                            </p>
                        </div>

                    </div>

                    {/* Formulário */}
                    <div className=" h-4/6 sm:w-full sm:h-full font-play py-6 px-14 ">
                        <div className='bg-slate-600/60 h-full w-full rounded-2xl p-4'>

                            <div className='flex flex-col  h-full justify-around '>

                                {/* Inputs */}
                                <div className=' flex flex-col h-48 '>
                                    <input type="text" className='bg-black/70 rounded-xl mb-2 h-12 text-xs sm:text-sm text-white sm:h-16 pl-4' placeholder=' email@example.com' />
                                    <input type="text" className='bg-black/70 rounded-xl mb-2 h-12  text-xs sm:text-sm text-white sm:h-16 pl-4' placeholder=' Seu nome' />
                                    <input type="password" className='bg-black/70 rounded-xl mb-2 h-12 text-xs sm:text-sm text-white sm:h-16 pl-4' placeholder=' Sua senha' />
                                    <input type="password" className='bg-black/70 rounded-xl mb-2 h-12 text-xs sm:text-sm text-white sm:h-16 pl-4' placeholder=' Repita sua senha' />
                                </div>

                                <p className='text-white text-xs sm:text-base px-2'>Ao se registrar, você aceita nossos 
                                <Link><span className='text-secondaryGreen font-bold sm:text-lg'>termos de uso </span></Link>
                                    e nossa <Link><span className='text-secondaryGreen font-bold sm:text-lg'>política de privacidade</span></Link>
                                </p>
                                {/* Botao Entrar */}
                                <div className='bg-secondaryGreen/80 w-5/6 rounded-lg flex justify-center
                                        text-2xl font-bold mx-auto py-2 mt-4'>
                                    <Link><button>Cadastrar</button></Link>
                                </div>
                                <div className='mx-auto text-center'>
                                    <p className='text-white text-xs sm:text-base px-2 '>Ja possui cadastro?
                                        <Link to={'/Login'}><span className='text-secondaryGreen font-bold sm:text-lg'> <br /> Área de Login</span></Link>
                                    </p>
                                </div>






                            </div>
                        </div>
                    </div>

                </div>
                <Link to={'/'}>
                    <p className='text-secondaryGreen font-bold 
                        fixed top-16 left-2
                        text-xl sm:-mt-8 sm:ml-4'>Voltar para Home</p>
                </Link>

            </div>
        </div>
    )
}