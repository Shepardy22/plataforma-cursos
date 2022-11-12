import {FaTimesCircle} from 'react-icons/fa'
import {  useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from '../../../services/firebaseConfig';

export default function Projetos() {

    const userCollectionRef = collection(db, "projetos");
    const [projetos, setProjetos] = useState([]);

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
                <button onClick={() => { }} className="h-12 bg-secondaryGreen rounded-lg
                 hover:bg-primaryBlue hover:text-secondaryGreen
                 text-black border border-primaryBlue font-bold
                 w-24 ">Adicionar</button>
            </div>
        </div>
    )
}