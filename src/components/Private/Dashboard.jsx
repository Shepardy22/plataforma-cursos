import { Link } from "react-router-dom";
import NavBarDashboard from "../NavBarDashboard";

import Projetos from "../Private/subMenuHome/Projetos";
import Perfil from "../Private/subMenuHome/Perfil";
import Habilidades from "../Private/subMenuHome/Habilidades";

import { useState } from "react";


export default function Dashboard() {

    const [subMenu, setSubMenu] = useState("Perfil");

    function handleSetPerfil() {
        setSubMenu("Perfil");
    }
    function handleSetHab() {
        setSubMenu("Habilidades");
    }
    function handleSetProj() {
        setSubMenu("Projetos");
    }

    return(
        <div className="min-h-screen ">
            <NavBarDashboard/>
            
                <div className=" ">
                    <div className="pt-24 flex flex-col 
                     sm:flex-row">

                        {/* Aba Lateral */}
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
                                                <span className="text-primaryBlue italic font-semibold">2529/5322</span><span className="text-secondaryGreen ml-6 font-extrabold">Nível 9</span>
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

                        {/* Main */}
                        <div className="  p-2 sm:w-9/12">

                            <div className="bg-black/60 h-full rounded-xl">
                                    <nav className="text-white h-24 ">
                                        <ul className="flex w-full h-full items-center justify-around sm:text-2xl">
                                            <button onClick={handleSetPerfil}  className={`hover:bg-black/20 ${subMenu === "Perfil" && "bg-black hover:bg-black"} h-24 flex items-center justify-center w-full rounded-t-2xl`}>
                                                <li>Perfil</li>
                                            </button>
                                            <button onClick={handleSetHab} className={`hover:bg-black/20 ${subMenu === "Habilidades" && "bg-black hover:bg-black"} h-24 flex items-center justify-center w-full rounded-t-2xl`}>
                                                <li>Habilidades</li>
                                            </button>
                                            <button onClick={handleSetProj} className={`hover:bg-black/20 ${subMenu === "Projetos" && "bg-black hover:bg-black"} h-24 flex items-center justify-center w-full rounded-t-2xl`}>
                                                <li>Projetos</li>
                                            </button>
                                        </ul>
                                    </nav>


                                    <div className="text-white  ">
                                        {subMenu === "Perfil" && <Perfil/>} 
                                        {subMenu === "Habilidades" && <Habilidades/>}
                                        {subMenu === "Projetos" && <Projetos/>}
                                    </div>
                            </div>

                           

                        </div>
                    </div>
                </div>
           
        </div>
    ) 
}