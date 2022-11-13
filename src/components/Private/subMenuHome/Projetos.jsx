/* eslint-disable react-hooks/exhaustive-deps */
import {FaTimesCircle} from 'react-icons/fa'
import {  useState, useEffect } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from '../../../services/firebaseConfig';
import { Navigate } from 'react-router-dom';

export default function Projetos() {

    const userCollectionRef = collection(db, "projetos");
    const [projetos, setProjetos] = useState([]);

    const [createNewProject, setCreateNewProject] = useState(false);
    const [nomeProjeto, setNomeProjeto] = useState("");
    const [link, setLink] = useState("");


    function handleCreateNewProject () {
        setCreateNewProject(!createNewProject);
    }
    // Function create a new project
    
    
    
     function criarProjeto() {
        const projeto = {
            nomeProjeto: nomeProjeto,
            link: link,
        }
        if(nomeProjeto === "" || link === ""){
            alert(" Preencha todos os campos!");
            return;
        }
        addDoc(userCollectionRef, projeto);
        
    }



    useEffect(() => {
        const getProjetos = async () => {
            const data = await getDocs(userCollectionRef);
            setProjetos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
        }
        getProjetos();

    }, []);

    async function deletarProjeto(id) {
        await deleteDoc(doc(db, "projetos", id));
    }

    return (
        <div className="bg-black ">
            <div>
                <h1 className="text-center font-semibold text-xl sm:text-2xl p-4">Projetos Finalizados</h1>
            </div>

            {projetos.map((projeto) => (
                <div className="text-center px-12 mb-4 " key={projeto.id}>
                    <h2 className="text-lg font-semibold">{projeto.nomeProjeto}</h2>
                    <div className='flex items-center gap-2'>
                        <p className="h-12  rounded-xl  bg-white text-black w-full
                            font-semibold items-center justify-center flex text-xs sm:text-base">
                            <a href={projeto.link} >
                                {projeto.link}
                            </a>
                        </p>
                        <div className='text-lg text-red-600'>
                            <button onClick={() => deletarProjeto(projeto.id)}>
                                <FaTimesCircle/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-end pr-12 ">
                <div>
                    {/* Adicionar Projetos Links */}
                    {createNewProject && 
                    <div className="border h-48 w-80 bg-black/80 ">
                    <h2 className="text-white">Adicionar Projetos</h2>
    
                    <div className="flex flex-col  gap-2 p-2 text-black">
                        <input type="text" placeholder="Nome do Projeto" 
                        value={nomeProjeto} onChange={(e) =>setNomeProjeto(e.target.value)}/>
                        <input type="text" placeholder="Link do Projeto" 
                        value={link} onChange={(e) =>setLink(e.target.value)}/>
                    </div>
    
                    <div className="h-12 w-24 bg-white/50 flex">
                        <button onClick={criarProjeto}>
                            Enviar projeto
                        </button>
                        
                    </div>
                    <h2 className='text-xs mt-2'>Troque de Aba para recarregar o Componente ao alterar alguma informação</h2>

                </div>
                    }
                    
            

                </div>
                <button onClick={handleCreateNewProject} className="h-12 bg-secondaryGreen rounded-lg
                 hover:bg-primaryBlue hover:text-secondaryGreen
                 text-black border border-primaryBlue font-bold
                 w-24 ">Adicionar</button>
            </div>
            <h2>Aqui o usuário Listará seus projetos finalizados com a comunidade</h2>
        </div>
    )
}