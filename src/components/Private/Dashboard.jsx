import NavBarDashboard from "../NavBarDashboard";

export default function Dashboard() {
    return(
        <div className="min-h-screen ">
            <NavBarDashboard/>
            
                <div className=" ">
                    <div className="pt-24 flex flex-col 
                     sm:flex-row">
                        <div className="  sm:w-3/12 p-2 " >
                                <div className="bg-black/80  rounded-xl flex flex-col items-center ">

                                    <div className="h-24 w-24   mt-16">
                                        <img src="https://avatars.githubusercontent.com/u/102148711?v=4" alt="Foto de perfil" className='rounded-full ' />
                                    </div>

                                    <h1 className="text-white pt-4 text-2xl">Yuri Nunes</h1>

                                    {/* Nivel Perfil */}
                                    <div className=" flex flex-col items-center w-full p-2">

                                        <div  className="flex flex-col items-center w-full rounded-xl bg-black">

                                            <h1 className="text-white pt-4 text-2xl">Nível do perfil</h1>
                                            <div className="text-white ">
                                                <span className="text-primaryBlue">2529/5322</span><span className="text-secondaryGreen ml-6">Nível 9</span>
                                            </div>
                                            <span className="text-white">barra exp</span>
                                            
                                        </div>
                                    </div>
                                    {/* ensignias */}
                                    <div className=" w-full p-2">
                                        <div className="rounded-2xl bg-black border border-secondaryGreen ">
                                            <div className="h-96 text-center">
                                                <h1 className="text-primaryBlue font-semibold pt-4 text-2xl">Ensignias</h1>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                        </div>

                        <div className="  p-2 
                            sm:h-screen  sm:w-9/12">
                                <div className="bg-black/60 h-full rounded-xl">
                                <div className="text-white h-48 border">
                                        conteudo
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
           
        </div>
    ) 
}