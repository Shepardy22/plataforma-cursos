import Forja from "../../Forja";
import Inventario from "../../Inventario";

import { useState } from "react";

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
                <h1 className="mt-4 font-bold text-xl sm:text-2xl text-center ">Frase do Dia</h1>
                <p className="  flex items-center justify-center text-center
                 bg-white/60 rounded-xl text-black font-bold sm:text-xl mt-2 h-20">
                    Corra o risco. Se der certo, felicidade. Se não, sabedoria.
                </p>
            </div>
            
                {/* SubMenu */}
            <div className="  flex justify-around mb-2 ">
                <button onClick={handleSetInventario} className="bg-secondaryGreen h-14 rounded-lg border border-primaryBlue text-black w-36 font-bold">
                    Inventário
                </button >
                <button onClick={handleSetForja} className="bg-secondaryGreen h-14 rounded-lg border border-primaryBlue text-black w-36 font-bold">
                Forja de Insígnias
                </button>
            </div>

            <div className="border rounded-lg h-96">
                {subMenu === "Forja" && <Forja />}
                {subMenu === "Inventario" && <Inventario />}
            </div>

            
        </div>
    )
}