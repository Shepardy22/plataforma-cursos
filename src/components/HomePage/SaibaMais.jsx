import Card from "../Card";

export default function SaibaMais() {
    return (
        <div className="h-full sm:h-screen pt-44">
            <div className="  bg-black/60  ">

                <div className="flex flex-col items-center h-full w-full sm:flex">
                    <div className="w-72 h-full bg-black/50 sm:w-full sm:pl-24 sm:pt-12 flex flex-col sm:flex-row items-center">
                        <Card key={1} curso={'qwe'} />
                        
                        <div className="h-72 sm:h-40 text-white text-lg text-center mx-auto ">
                            <p>Formação completa Front-end:</p>
                            <p>Nível básico ao Avançado.</p>
                            <p>Aulas Online diariamente</p>
                            <p>+ 148 Aulas bônus gravadas</p>
                            <p>+42 projetos para validar conhecimentos</p>
                            <p>Interação com a comunidade</p>
                            <p>Suporte ao Aluno</p>
                        
                        </div>
                    </div>
                    <div className=" w-4/6 h-full bg-black/50 sm:w-full sm:h-full">
                        <div className="hidden h-36 sm:flex flex-col items-center mt-4">
                            <h2 className=" text-secondaryGreen font-semibold text-2xl">Tecnologias Utilizadas</h2>
                            <div className=" bg-white w-3/4 h-16 mt-4">
                                <ul className="flex justify-around bg-slate-700 ">
                                    <li className="p-5">a</li>
                                    <li className="p-5">b</li>
                                    <li className="p-5">c</li>
                                    <li className="p-5">d</li>
                                    <li className="p-5">e</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}