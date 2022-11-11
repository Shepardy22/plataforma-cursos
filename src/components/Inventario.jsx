import Insignia from "./Ensignia"

export default function Inventario() {

   const itens = ["@","$","!","%","&","*"];

    return (
        <div className="flex flex-wrap gap-1 p-2 ">
                {itens.map((item) => (
                    <Insignia key={item} item={item}/>
                ))}   
           
          </div>
    )
}