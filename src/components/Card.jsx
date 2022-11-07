export default function Card(){
    return (
        <div className="border border-secondaryGreen
            m-2 p-1 w-48
            drop-shadow-2xl rounded-xl">

            <div className="drop-shadow-xl rounded-2xl bg-secondaryGreen/80 h-full">
                <div className="">
                    <p className="py-4 text-center text-3xl font-semibold">Carreira Back-end</p>
                </div>
                <div className="px-2  flex flex-col  items-center">
                    <p>- Formação Java </p>
                    <p>- Formação Python </p>
                    <p>- Formação PHP </p>
                    <div className="mt-4 text-xl font-semibold">
                        <p>124 Aulas</p>
                        <p>22 Projetos</p>
                    </div>
                    <button className='font-semibold bg-primaryBlue
                        hover:bg-secondaryGreen hover:text-primaryBlue
                        rounded-3xl w-36 h-8 text-secondaryGreen  mt-8 mb-4'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}