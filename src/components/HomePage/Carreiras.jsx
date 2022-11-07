import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export default function Carreiras() {
    return (
        
            <div className="w-full  
                h-screen bg-background bg-no-repeat bg-cover ">
                <NavBar/>
                    <div className=" w-full">
                        
                    </div>
                {/* Divisor Metodologia */}
                <div className="h-24  w-full mt-16 fixed bottom-0
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