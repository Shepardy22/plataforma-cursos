import { Link } from "react-router-dom";
import ProgressBar from "../../ProgressBar";

export default function Habilidades() {
    return (
        <div className="bg-black h-96 p-4 ">

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={423}
                expMax={589}
                nivel={9}
                title={"HTML 5"}
            />

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={745}
                expMax={1249}
                nivel={9}
                title={"CSS 3"}
            />

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={856}
                expMax={1200}
                nivel={9}
                title={"JavaScript"}
            />

            <ProgressBar color={"primaryBlue"}
                height={"2"}
                width={"w-full"}
                exp={245}
                expMax={589}
                nivel={9}
                title={"React"}
            />
            <h1 className="text-white flex justify-end mr-6 italic text-sm font-bold mb-2">
                <Link>Saber mais sobre Níveis e Habilidades</Link>
            </h1>
        </div>
    )
}