import Forja from "../../Forja";
import Inventario from "../../Inventario";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Perfil() {

    const [subMenu, setSubMenu] = useState("Inventario");

    function handleSetInventario() {
        setSubMenu("Inventario");
    }
    function handleSetForja() {
        setSubMenu("Forja");
    }

    return (
        <div className="bg-black  p-4 rounded-xl">
            {/* Frase do dia */}
            <div className="flex-col  justify-center    p-4 ">
                <h1 className=" font-bold text-lg sm:text-xl text-center ">Frase do Dia</h1>
                <p className="  flex items-center justify-center text-center
                 bg-white/60 rounded-xl text-black font-bold sm:text-xl mt-2 h-14">
                    Corra o risco. Se der certo, felicidade. Se não, sabedoria.
                </p>
            </div>

            {/* SubMenu */}
            <div className="  flex justify-around mb-2 text-sm">
                <button onClick={handleSetInventario} className="bg-secondaryGreen h-12
                     rounded-lg border hover:bg-primaryBlue hover:text-secondaryGreen
                     border-primaryBlue text-black w-28 font-bold">
                    Inventário
                </button >
                <button onClick={handleSetForja} className="bg-secondaryGreen h-12
                     rounded-lg border hover:bg-primaryBlue hover:text-secondaryGreen
                     border-primaryBlue text-black w-28 font-bold">
                    Forja de Insígnias
                </button>
            </div>

            <div className="border rounded-lg h-96">
                {subMenu === "Forja" && <Forja />}
                {subMenu === "Inventario" && <Inventario />}
            </div>

            <h1 className="text-white flex justify-end mr-6 italic text-sm font-bold mb-2">
                <Link>Tutorias sobre Insígnias e Emblemas</Link>
            </h1>
        </div>
    )
}