/* eslint-disable no-unused-vars */
import userFoto from '../../assets/img/user.png';
import NavBarDashboard from "../NavBarDashboard";
import Projetos from "../Private/subMenuHome/Projetos";
import Perfil from "../Private/subMenuHome/Perfil";
import Habilidades from "../Private/subMenuHome/Habilidades";

import { useContext, useState, useEffect } from "react";
import { FaCss3Alt, FaGrunt, FaHtml5, FaInternetExplorer, FaJava, FaJsSquare, FaMedal, FaReact } from "react-icons/fa";
import { AuthContext } from "../../contexts/authVerify";

import { db } from "../../services/firebaseConfig";
import { collection } from "firebase/firestore";

export default function Dashboard() {

    const userCollectionRef = collection(db, "users");

    const { user } = useContext(AuthContext);


    const photoUser = localStorage.getItem("@AuthFirebase:Photo");



    const [xp, setXp] = useState(463);
    const [xpMaximo, setXpMaximo] = useState(1245);
    const [nivel, setNivel] = useState(9);
    let porcentagem = (xp / xpMaximo) * 100;


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
                <div className="pt-16 flex flex-col 
                     sm:flex-row">

                    {/* Aba Lateral */}
                    <div className="  sm:w-3/12 p-2 " >

                        <div className="bg-black/80  rounded-xl flex flex-col items-center h-full ">

                            <div className="h-24 w-24   mt-16 border rounded-full">
                                {photoUser ? (<img src={photoUser} alt="Foto de perfil" className='rounded-full ' />) :
                                    (<img src={userFoto} alt="Foto " className='rounded-full bg-white' />)}
                            </div>

                            <h1 className="text-white pt-4 text-xl">{user.displayName ? user.displayName : 'Nome Usuário'}</h1>

                            {/* Nivel Perfil */}
                            <div className=" flex flex-col items-center w-full p-2 ">

                                <div className="flex flex-col items-center w-full rounded-xl bg-black p-2">

                                    <h1 className="text-white pt-4 text-xl">Nível do perfil</h1>

                                    <div className="text-white flex  w-full items-center justify-around ">
                                        <span className="text-primaryBlue italic font-semibold flex text-sm">{xp}/{xpMaximo}</span>
                                        <span className="text-secondaryGreen ml-6 font-extrabold">Nível {nivel}</span>
                                    </div>
                                    {/* progressBar */}
                                    <div className={`w-full bg-gray-200  mb-4 dark:bg-gray-700 rounded-2xl `}>
                                        <div className={`w-full`}>
                                            <div className={`bg-secondaryGreen italic text-xs text-transparent rounded-2xl h-3`}
                                                style={{ width: `${porcentagem}%` }}>exp</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* ensignias */}
                            <div className=" w-full p-2">
                                <div className="rounded-xl bg-black border border-secondaryGreen p-2">
                                    <div className="h-96 text-center">

                                        <h1 className="text-primaryBlue font-semibold  text-xl">Insígnias</h1>
                                        {/* Itens */}
                                        <div className="  mt-2 flex flex-wrap  p-2 gap-2">

                                            <FaHtml5 className="text-secondaryGreen text-3xl" />
                                            <FaJsSquare className="text-secondaryGreen text-3xl" />
                                            <FaCss3Alt className="text-secondaryGreen text-3xl" />
                                            <FaReact className="text-secondaryGreen text-3xl" />
                                            <FaMedal className="text-secondaryGreen text-3xl" />
                                            <FaInternetExplorer className="text-secondaryGreen text-3xl" />
                                            <FaGrunt className="text-secondaryGreen text-3xl" />
                                            <FaJava className="text-secondaryGreen text-3xl" />

                                        </div>
                                        <h2 className='text-white mt-6'>Aqui será exibido insígnias de conquistas realizadas durante os cursos</h2>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Main */}
                    <div className="  p-2 sm:w-9/12">

                        {/* SubNavBar e Render*/}
                        <div className="bg-black/60 h-full rounded-xl">
                            <nav className="text-white h-16 ">
                                <ul className="flex w-full h-full items-center justify-around sm:text-xl">
                                    <button onClick={handleSetPerfil} className={`hover:bg-black/20 ${subMenu === "Perfil" && "bg-black hover:bg-black"} 
                                                h-16 flex items-center justify-center w-full rounded-t-xl`}>
                                        <li>Perfil</li>
                                    </button>
                                    <button onClick={handleSetHab} className={`hover:bg-black/20 ${subMenu === "Habilidades" && "bg-black hover:bg-black"}
                                                 h-16 flex items-center justify-center w-full rounded-t-xl`}>
                                        <li>Habilidades</li>
                                    </button>
                                    <button onClick={handleSetProj} className={`hover:bg-black/20 ${subMenu === "Projetos" && "bg-black hover:bg-black"}
                                                 h-16 flex items-center justify-center w-full rounded-t-xl`}>
                                        <li>Projetos</li>
                                    </button>
                                </ul>
                            </nav>

                            {/* Render SubMenu */}
                            <div className="text-white  ">
                                {subMenu === "Perfil" && <Perfil />}
                                {subMenu === "Habilidades" && <Habilidades />}
                                {subMenu === "Projetos" && <Projetos />}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}