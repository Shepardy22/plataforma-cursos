import React from 'react';

import Divisor from "../Divisor";
import AulasInterativas from '../../assets/img/AulasInterativas.jpg';
import ConteudoRev from '../../assets/img/ConteudoRev.jpg';
import { Typewriter } from 'react-simple-typewriter'
import NavBar from '../NavBar';


export default function Metodologia() {
    return (
        <>
        <NavBar />
            <div className=" flex flex-col h-full py-24 bg-bg-Cod">

                <div className="w-full  h-96 flex flex-col sm:flex-row">
                    <div className=" h-1/2 sm:h-full sm:w-1/2 flex items-center justify-center p-4 ">
                        <div className="w-72 sm:w-full">
                            <img src={AulasInterativas} alt="Imagem Aulas"  />
                        </div>
                    </div>
                    <div className=" h-1/2 sm:h-full sm:w-1/2 flex items-center p-2">
                        <div className=" bg-black/20 rounded-2xl ">
                            <h1 className="text-2xl sm:text-4xl font-semibold text-center text-white">
                            <Typewriter
                                    words={['Aulas Interativas com professores Online em tempo Real.']}
                                    loop={1}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    //onLoopDone={handleDone}
                                />

                                
                            </h1>       
                        </div>
                    </div>
                </div>

                <div className="w-full  h-96 flex flex-col sm:flex-row ">
                <div className=" h-1/2 sm:h-full sm:w-1/2 
                        flex items-center justify-center p-4 sm:order-1 
                        bg-white/50 ">
                        <div className="w-64 sm:w-4/5  ">
                            <div >
                                <img src={ConteudoRev} alt="Imagem Aulas"  />
                            </div>
                        </div>
                    </div>
                    <div className=" h-1/2 sm:h-full sm:w-1/2 flex items-center my-4 sm:m-0">
                        <div className="bg-white/50 w-full h-full flex items-center  ">
                            <h1 className="text-2xl sm:text-4xl font-semibold text-center ">
                                Conteúdos Salvos para revisar a qualquer momento.
                            </h1>
                        </div>
                    </div>
                </div>

                




            </div>
            <Divisor />

        </>






    )
}