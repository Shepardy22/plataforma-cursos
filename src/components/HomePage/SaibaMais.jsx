/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";
import NavBar from '../NavBar';
import { db } from "../../services/firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

export default function SaibaMais() {

    const { id } = useParams();
    const [curso, setCurso] = useState({});

    const userCollectionRef = collection(db, "cursos");

    useEffect(() => {
        const getCurso = async () => {
            const data = await getDocs(userCollectionRef);
            const dadosSalvos = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            const curso = dadosSalvos.find((curso) => curso.id === id);
            setCurso(curso);
        }
        
        getCurso();
    }, []);

    const descricao = curso.descricao;

    return (
        <div className=" h-screen flex items-center justify-center ">
            <NavBar />

            <div className="flex flex-col items-center w-full mt-24 ">

                {/* Card Curso e Descrição */}
                <div className="  bg-black/50 flex flex-col items-center sm:flex-row w-3/4 border ">

                    <div>
                        <Card key={1} curso={curso} nomeButton='Começar' />
                    </div>

                    <div className="h-full  sm:h-40 text-white text-lg text-center mx-auto px-4">
                        {descricao && <p>{descricao}</p>}
                    </div>

                </div>

            </div>

        </div>
    )
}

