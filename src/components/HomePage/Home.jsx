import React, { useContext} from 'react';

import { Link, Navigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../../contexts/authVerify';
import NavBar from '../NavBar';

export default function Home (){

    const {signed} = useContext(AuthContext);

    if (signed) {
        //navigate

        return <Navigate to="/Dashboard" />

    } 

    return(
                <>
                <NavBar />
                 <div className=" w-full  flex flex-col
                    h-screen ">
                    {/* Cards Middle */}
                    <div className="flex flex-col  items-center sm:flex-row my-auto
                        sm:justify-around  sm:space-x-10">
                        {/* primeiro Texto */}
                        <div className="
                            mt-8
                            rounded-2xl
                            h-56 w-64
                             bg-primaryCinza/40
                             
                            
                            sm:w-1/3 sm:h-96 
                            ">
         
                            <div className="text-5xl flex text-center 
                            sm:text-6xl sm:mt-10 sm:mb-10
                            ">
                                <p className="font-semibold mt-2
                                sm:mt-8 ">Sua carreira Começa 
                                    <br />
        
                                    <span className="text-secondaryGreen ">
                                        <Typewriter
                                            words={['Aqui', 'Agora', 'Hoje!']}
                                            loop={3}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={100}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            //onLoopDone={handleDone}
                                        />
                                        </span>
                                        
                                </p>
                            </div>
                        </div>
                        {/* Segundo Texto */}
                        <div className=" flex items-center
                                mt-6
                                rounded-2xl
                                h-52 w-64
                                backdrop-opacity-10 backdrop-invert bg-secondaryCinza/60
        
                                sm:w-1/3 sm:h-64
                                sm:mt-46
                                sm:ml-8
        
                                "> 
                                <div className="flex ">
                                   
                                    <p className="text-center text-secondaryGreen font-semibold m-2">
                                        
                                            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                                        
                                    </p>
                                  
                                </div>
        
                        </div>
                    </div>
        
                    {/* Divisor Carreiras */}
                    <div className="h-24  w-full mt-16 fixed bottom-0
                        backdrop-opacity-10 backdrop-invert bg-black/70 
                        flex justify-center items-center">
        
                        <Link to={"/Carreiras"}>
                            <button className="border rounded-xl border-secondaryGreen" id="Carreiras">
                                <h2 className="text-lg text-primaryBlue font-semibold p-2">
                                    Explore nossas Carreiras
                                </h2>
                            </button>
                        </Link>
                    </div>
        
                </div>
                
                </>
               
    )  

}