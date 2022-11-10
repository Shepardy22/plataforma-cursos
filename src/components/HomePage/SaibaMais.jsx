import React from 'react';

import { useEffect, useRef, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Card from "../Card";
import NavBar from '../NavBar';





export default function SaibaMais() {

    const { id } = useParams();
    const [curso, setCurso] = useState({});



    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Shepardy22/plataforma-cursos/Cursos/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setCurso(data))

            .catch(error => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const descricao = curso.descricao;
    const tecnologias = curso.tecnologias;

    const refCaroucel = useRef(null);

    function handleRightClick(e) {
        e.preventDefault();
        refCaroucel.current.scrollLeft += refCaroucel.current.offsetWidth;
    }

    function handleLeftClick(e) {
        e.preventDefault();
        refCaroucel.current.scrollLeft -= refCaroucel.current.offsetWidth;
    }

    return (
        <div className=" h-screen flex items-center justify-center ">
            <NavBar />

            <div className="flex flex-col items-center w-full mt-24 ">

                {/* Card Curso e Descrição */}
                <div className="  bg-black/50 flex flex-col items-center sm:flex-row  ">

                    <Card key={1} curso={curso} nomeButton='Começar' />

                    <div className="h-full sm:h-40 text-white text-lg text-center mx-auto px-4">
                        {descricao && descricao.map((desc) => (
                            <p key={desc}>{desc}</p>
                        ))}
                    </div>

                </div>

                
                {/* Tecnologias */}
                <h2 className=" text-secondaryGreen text-2xl">Tecnologias Utilizadas</h2>
                <div ref={refCaroucel} className="  w-6/12   h-full bg-black/20 rounded-xl p-2
                                    flex items-center 
                                    overflow-x-auto scroll-smooth
                                    ">
                            {/* Lista de Icones */}
                            
                        <div className="flex flex-col items-center mx-auto">
                            
                            <ul className="justify-around  flex ">
                                {tecnologias && tecnologias.map((tec) => (
                                    <li key={tec} className="text-white text-lg  w-20 h-20 mx-1">
                                        <img src={`../tecnologias/${tec}.png`} alt={tec} />
                                    </li>))}
                            </ul>
                    
                        </div>
                </div>
                

                {/* Botoes */}
                <div className="h-12  w-full text-center lg:hidden">
                            
                    <div className="flex w-full ">
                        <div className="flex mx-auto gap-8 text-5xl text-secondaryGreen">
                                    <button onClick={handleLeftClick} className="w-12 h-12  ">
                                        <FaAngleDoubleLeft />
                                    </button>
                                    <button onClick={handleRightClick} className="w-12 h-12  ">
                                        <FaAngleDoubleRight />
                                    </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}