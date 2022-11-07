import { Link } from "react-router-dom";
import { useRef } from "react";
import NavBar from "../NavBar";
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

    return (

        <div className="w-full  
                h-screen bg-background bg-no-repeat bg-cover ">
            <NavBar />
            <div className="flex justify-center  flex-col mt-4">

                <div className="flex items-center justify-center w-full">
                    {/* Caroucel */}
                    <div ref={refCaroucel} className=" border w-full mx-12 h-5/6 
                                flex items-center
                                overflow-x-auto scroll-smooth
                                ">
                        
                        <div className="flex">
                            {/* passar via props os Dados */}
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>

                    </div>
                    
                    
                </div>

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