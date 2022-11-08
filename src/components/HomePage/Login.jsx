import { Link } from 'react-router-dom';
import Logo from'../../assets/img/Logo.png';
import googleLogo from'../../assets/img/googleLogo.png';
import gitLogo from'../../assets/img/gitLogo.png';


export default function Login() {
    return (
        <div className="bg-background bg-no-repeat flex flex-col bg-cover h-screen w-screen ">
            <div className=" bg-black/70  h-full my-24  ">

                <div className=" flex flex-col  h-full sm:flex-row sm:w-full  ">
                        
                    {/* Aba Lateral */}
                    <div className="  h-2/6 sm:w-full sm:h-full justify-center
                        flex flex-col items-center ">
                        <div className='h-16 w-16 mt-4
                           sm:h-48 sm:w-48  '>
                            <img src={Logo} alt="Logo"/>
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
                        <div className='bg-slate-600/60 h-full w-full rounded-2xl p-4 '>

                                <div className='flex flex-col  h-full justify-around  '>

                                    {/* Inputs */}
                                    <div className=' flex flex-col h-3/6 '>
                                        <input type="text" className='bg-black/70 rounded-xl mb-4 h-3/6 text-sm text-white sm:h-16 pl-4' placeholder= {`Digite Seu e-mail`}/>
                                        <input type="text" className='bg-black/70 rounded-xl  h-3/6 text-sm text-white sm:h-16 pl-4' placeholder=' Digite sua senha'/>
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
                                    <div className='flex flex-col items-center mt-2 relative'>
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