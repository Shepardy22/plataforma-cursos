import Insignia from "./Ensignia"

export default function Inventario() {

   const itens = ["@","$","!","%","&","*"];

    return (
        <div className="flex flex-wrap gap-1 p-2 ">
                {itens.map((item) => (
                    <Insignia key={item} item={item}/>
                ))}   
           <h2 className="mt-6">Aqui será Exibido Itens ganhos durante os cursos, eventos e testes de conhecimento. 
                Usados na forja para gerar insígnias e desbloquear novos módulos</h2>
          </div>
    )
}