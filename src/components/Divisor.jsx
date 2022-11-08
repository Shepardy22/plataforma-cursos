import React from 'react';

import { Link } from "react-router-dom";

export default function Divisor() {
    return (
        <div className="w-full  divisor">
                <div className="h-24  w-full fixed bottom-0
                    backdrop-opacity-10 backdrop-invert bg-black/70
                    flex justify-center items-center">
                    <Link to={"/Comunidade"}>
                        <button className="border rounded-xl border-secondaryGreen " id="Carreiras">
                            <h2 className="text-lg text-primaryBlue font-semibold p-2">
                                Acesso a Comunidade
                            </h2>
                        </button>
                    </Link>
                </div>
            </div>
    )
}