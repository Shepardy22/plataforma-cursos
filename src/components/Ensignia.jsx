import { Link } from "react-router-dom";

export default function Insignia({item}) {
    return (
        <>
        <Link>
            <div className="w-12 h-12 bg-primaryBlue/20 rounded-lg  flex items-center justify-center">
                {item}
            </div>
        </Link>
        </>
        
    )
}