import { Link } from "react-router-dom";
import ProgressBar from "../../ProgressBar";

export default function Habilidades() {
    return (
        <div className="bg-black h-96 p-4 ">

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={423}
                expMax={2548}
                nivel={8}
                title={"HTML 5"}
            />

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={745}
                expMax={1722}
                nivel={5}
                title={"CSS 3"}
            />

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={1843}
                expMax={2145}
                nivel={7}
                title={"JavaScript"}
            />

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={2378}
                expMax={3426}
                nivel={12}
                title={"React"}
            />
            <h2>Aqui o Usuário poderá visualizar sua Habilidades adquiridas durante os cursos de acordo com o nivel de dificuldade,
                a cada nivel serão desbloqueados novos cursos e desafios.
            </h2>
            <h1 className="text-white flex justify-end mr-6 italic text-sm font-bold mb-2">
                <Link>Saber mais sobre Níveis e Habilidades</Link>
            </h1>
        </div>
    )
}