import NavBarDashboard from "../NavBarDashboard";
import Projetos from "../Private/subMenuHome/Projetos";
import Perfil from "../Private/subMenuHome/Perfil";
import Habilidades from "../Private/subMenuHome/Habilidades";

import { useState } from "react";
import ProgressBar from "../ProgressBar";
import { FaCss3Alt, FaGrunt, FaHtml5, FaInternetExplorer, FaJava, FaJsSquare, FaMedal, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Dashboard() {

    const [xp, setXp] = useState(180);
    const [xpMaximo, setXpMaximo] = useState(500);
    let porcentagem = (xp/xpMaximo)*100;
    


    const size = porcentagem;
    

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
   

   
    return (
        <div className="min-h-screen ">
            <NavBarDashboard />

            <div className=" ">
                <div className="pt-24 flex flex-col 
                     sm:flex-row">

                    {/* Aba Lateral */}
                    <div className="  sm:w-3/12 p-2 " >

                        <div className="bg-black/80  rounded-xl flex flex-col items-center h-full ">

                            <div className="h-24 w-24   mt-16">
                                <img src="https://avatars.githubusercontent.com/u/102148711?v=4" alt="Foto de perfil" className='rounded-full ' />
                            </div>

                            <h1 className="text-white pt-4 text-2xl">Yuri Nunes</h1>

                            {/* Nivel Perfil */}
                            <div className=" flex flex-col items-center w-full p-2">

                                <div className="flex flex-col items-center w-full rounded-xl bg-black">

                                    <h1 className="text-white pt-4 text-2xl">Nível do perfil</h1>

                                    <div className="text-white flex  w-full items-center justify-around ">
                                        <span className="text-primaryBlue italic font-semibold flex text-sm">{xp}/{xpMaximo}</span>
                                        <span className="text-secondaryGreen ml-6 font-extrabold">Nível 9</span>
                                    </div>

                                    <ProgressBar color={'secondaryGreen'} height={3} width={"w-full"} valor={size}/>

                                </div>
                            </div>

                            {/* ensignias */}
                            <div className=" w-full p-2">
                                <div className="rounded-2xl bg-black border border-secondaryGreen p-2">
                                    <div className="h-96 text-center">
                                        
                                        <h1 className="text-primaryBlue font-semibold  text-2xl">Insígnias</h1>
                                        {/* Itens */}
                                        <div className="  mt-2 flex flex-wrap  p-2 gap-2">

                                            <FaHtml5 className="text-secondaryGreen text-3xl"/>
                                            <FaJsSquare className="text-secondaryGreen text-3xl"/>
                                            <FaCss3Alt className="text-secondaryGreen text-3xl"/>
                                            <FaReact className="text-secondaryGreen text-3xl"/>
                                            <FaMedal className="text-secondaryGreen text-3xl"/>
                                            <FaInternetExplorer className="text-secondaryGreen text-3xl"/>
                                            <FaGrunt className="text-secondaryGreen text-3xl"/>
                                            <FaJava className="text-secondaryGreen text-3xl"/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Main */}
                    <div className="  p-2 sm:w-9/12">
                            {/* SubNavBar */}
                        <div className="bg-black/60 h-full rounded-xl">
                            <nav className="text-white h-24 ">
                                <ul className="flex w-full h-full items-center justify-around sm:text-2xl">
                                    <button onClick={handleSetPerfil} className={`hover:bg-black/20 ${subMenu === "Perfil" && "bg-black hover:bg-black"} 
                                                h-24 flex items-center justify-center w-full rounded-t-2xl`}>
                                        <li>Perfil</li>
                                    </button>
                                    <button onClick={handleSetHab} className={`hover:bg-black/20 ${subMenu === "Habilidades" && "bg-black hover:bg-black"}
                                                 h-24 flex items-center justify-center w-full rounded-t-2xl`}>
                                        <li>Habilidades</li>
                                    </button>
                                    <button onClick={handleSetProj} className={`hover:bg-black/20 ${subMenu === "Projetos" && "bg-black hover:bg-black"}
                                                 h-24 flex items-center justify-center w-full rounded-t-2xl`}>
                                        <li>Projetos</li>
                                    </button>
                                </ul>
                            </nav>


                            <div className="text-white  ">
                                {subMenu === "Perfil" && <Perfil />}
                                {subMenu === "Habilidades" && <Habilidades />}
                                {subMenu === "Projetos" && <Projetos />}

                                <h1 className="text-white flex justify-end mr-6 italic text-sm font-bold mb-2">
                                    <Link>Tutorias sobre Insígnias e Emblemas</Link>
                                </h1>
                            </div>
                            
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}