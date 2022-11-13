import NavBarADM from "./NavBarADM";
import { useState } from "react";

import { db } from "../../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

// Funcionalidades ADM
export default function AdmUser() {

 const userCollectionRefCursos = collection(db, "cursos");


    const [nomeCurso, setNomeCurso] = useState("");
    const [form1, setForm1] = useState("");
    const [form2, setForm2] = useState("");
    const [form3, setForm3] = useState("");
    const [qntAulas, setQntAulas] = useState("");
    const [qntProjetos, setQntProjetos] = useState("");
    const [descricao, setDescriçao] = useState("");


    async function criarCurso() {
        const curso = {
            nome: nomeCurso,
            formacao1: form1,
            formacao2: form2,
            formacao3: form3,
            aulas: qntAulas,
            projetos: qntProjetos,
            descricao: descricao,
        }
        addDoc(userCollectionRefCursos, curso);
        <Navigate to="/Carreiras" />
    }


    return(
        <div className="h-screen pt-24 flex gap-2">
            <NavBarADM/>
           
            <div className="border bg-black/80 h-72 w-48 flex flex-col gap-2 p-2">
                <input type="text" placeholder="Nome Projeto" value={nomeCurso} onChange={(e) =>setNomeCurso(e.target.value)}/>
                <input type="text" placeholder="Formação 1" value={form1} onChange={(e) =>setForm1(e.target.value)}/>
                <input type="text" placeholder="Formação 2" value={form2} onChange={(e) =>setForm2(e.target.value)}/>
                <input type="text" placeholder="Formação 3" value={form3} onChange={(e) =>setForm3(e.target.value)}/>
                <input type="text" placeholder="qnd Aulas" value={qntAulas} onChange={(e) =>setQntAulas(e.target.value)}/>
                <input type="text" placeholder="qnd Projetos" value={qntProjetos} onChange={(e) =>setQntProjetos(e.target.value)}/>
                <input type="text" placeholder="descriçao" value={descricao} onChange={(e) =>setDescriçao(e.target.value)}/>
                
                <div className="h-12 w-24 bg-white/50">
                    <button onClick={criarCurso}>Enviar Curso</button>
                </div>
            </div>
        </div>
    ) 
}