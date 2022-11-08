import { Link } from "react-router-dom";

export default function Card(props){
    return (
        <div className="border border-secondaryGreen
            m-2 p-1 w-52
            drop-shadow-2xl rounded-xl">

            <div className="drop-shadow-xl rounded-2xl bg-secondaryGreen/80 h-full">
                <div className="">
                    <p className="py-4 text-center text-3xl font-semibold">{props.curso.nome}</p>
                </div>
                <div className="px-2  flex flex-col  items-center">
                    <p>- {props.curso.formacao1} </p>
                    <p>- {props.curso.formacao2} </p>
                    <p>- {props.curso.formacao3}</p>
                    <div className="mt-4 text-xl font-semibold">
                        <p>{props.curso.aulas} Aulas</p>
                        <p>{props.curso.projetos} Projetos</p>
                    </div>
                    
                        <button className='font-semibold bg-primaryBlue
                            hover:bg-secondaryGreen hover:text-primaryBlue
                            rounded-3xl w-36 h-8 text-secondaryGreen  mt-8 mb-4'>
                            <Link to={'/Saibamais'}>Saiba Mais</Link>
                        </button>
                    
                </div>
            </div>
        </div>
    )
}