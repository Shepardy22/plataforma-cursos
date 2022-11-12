import NavBarADM from "./NavBarADM";
import { useState } from "react";

import { db } from "../../services/firebaseConfig";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";


export default function AdmUser() {

    const userCollectionRef = collection(db, "projetos");

 const [nomeProjeto, setNomeProjeto] = useState("");
    const [link, setLink] = useState("");

  async function criarProjeto() {
        const projeto = {
            nomeProjeto: nomeProjeto,
            link: link,
        }
        addDoc(userCollectionRef, projeto);
    }

    

    return(
        <div className="h-screen pt-24">
            <NavBarADM/>
            <div className="border h-48 w-80 bg-black/80 ">
                <div className="flex flex-col  gap-2 p-2 ">
                    <input type="text" placeholder="Nome do Projeto" 
                    value={nomeProjeto} onChange={(e) =>setNomeProjeto(e.target.value)}/>
                    <input type="text" placeholder="Link do Projeto" 
                    value={link} onChange={(e) =>setLink(e.target.value)}/>
                </div>

                <div className="h-12 w-24 bg-white/50 ">
                    <button onClick={criarProjeto}>
                        Enviar projeto
                    </button>
                </div>
            </div>
        </div>
    ) 
}