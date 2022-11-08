import React from 'react';

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Card from "../Card";

import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';

export default function Carreiras() {
//window.scrollTo(0, 0);

    const refCaroucel = useRef(null);
    
    const handleRightClick = (e) => {
        e.preventDefault();
        refCaroucel.current.scrollLeft += refCaroucel.current.offsetWidth;

    };
    const handleLeftClick = (e) => {
        e.preventDefault();
        refCaroucel.current.scrollLeft -= refCaroucel.current.offsetWidth;
    };

    const [cursos, setcursos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Shepardy22/plataforma-cursos/Cursos', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => setcursos(data))

            .catch(error => console.log(error))

            
    }, []);

    return (

        <div className="w-full  flex flex-col 
                h-screen  ">
            
            <div className="flex justify-center  flex-col my-auto">

                    <div className="mx-auto p-4 bg-black/20  rounded-3xl 
                    text-4xl text-primaryBlue font-semibold">Conheça nossos Cursos</div>

                <div className="flex items-center justify-center w-full">
                    {/* Caroucel */}
                    <div ref={refCaroucel} className=" border w-full mx-2 
                                flex items-center
                                overflow-x-auto scroll-smooth
                                ">
                        {/* Cards */}
                        <div className="flex">
                            {/* passar via props os Dados */}
                            {cursos.map((curso) => (
                                <Card key={curso.id} curso={curso} nomeButton='Saiba Mais'/>
                            ))}
                            
                        </div>

                    </div>
                    
                    
                </div>
                {/* Botoes */}
                <div className="flex w-full mt-2 ">
                    <div className="flex mx-auto gap-8 text-5xl text-secondaryGreen">
                        <button onClick={handleLeftClick} className="w-12 h-12  ">
                            <FaAngleDoubleLeft/>
                        </button>
                        <button onClick={handleRightClick} className="w-12 h-12  ">
                            <FaAngleDoubleRight/>
                        </button>
                    </div>
                </div>
                
            </div>
            

            {/* Divisor Metodologia */}
            <div className="h-24  w-full fixed bottom-0
                    backdrop-opacity-10 backdrop-invert bg-black/70
                    flex justify-center items-center">
                <Link to={"/Metodologia"}>
                    <button className="border rounded-xl border-secondaryGreen " id="Carreiras">
                        <h2 className="text-lg text-primaryBlue font-semibold p-2">
                            Metodologia de Ensino
                        </h2>
                    </button>
                </Link>
            </div>
            
            
        </div>

    )
}