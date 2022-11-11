export default function Projetos() {
    return(
        <div className="bg-black h-96">
            <div>
                <h1 className="text-center font-semibold text-xl sm:text-2xl p-4">Projetos Finalizados</h1>
            </div>

            <div className="text-center px-12 mb-4 ">
                <h2 className="text-lg font-semibold">Plataforma de Cursos</h2>
                <p className="h-12  rounded-xl  bg-white text-black   
                    font-semibold items-center justify-center flex text-xs sm:text-base">
                    <a href="https://github.com/Shepardy22/plataforma-cursos" >
                    https://github.com/Shepardy22/plataforma-cursos
                    </a>
                </p>
            </div>
            <div className="text-center px-12 mb-4 ">
                <h2 className="text-lg font-semibold">Plataforma de Cursos</h2>
                <p className="h-12  rounded-xl  bg-white text-black   
                    font-semibold items-center justify-center flex text-xs sm:text-base">
                    <a href="https://github.com/Shepardy22/plataforma-cursos" >
                    https://github.com/Shepardy22/plataforma-cursos
                    </a>
                </p>
            </div>
            <div className="flex justify-end pr-12 ">
                <button className="h-12 bg-secondaryGreen rounded-lg
                 hover:bg-primaryBlue hover:text-secondaryGreen
                 text-black border border-primaryBlue font-bold
                 w-24 ">Adicionar</button>
            </div>
        </div>
    ) 
}