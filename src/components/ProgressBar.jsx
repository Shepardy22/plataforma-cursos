export default function ProgressBar({ height, width, color, title, exp, expMax, nivel}) {
   
    const xp = exp;
    const xpMaximo = expMax;
    let porcentagem = (xp / xpMaximo) * 100;

   
    return (
        <div>
             <div className="flex justify-between px-4">
                    <span className="sm:text-xl font-bold">{title}</span>
                    <span className="italic flex items-end font-semibold text-xs">XP {exp} / {expMax} </span>
                    <span className="flex items-end sm:text-lg font-bold text-secondaryGreen">{`Nível ${nivel}`}</span>
                </div>
            <div className={`${width}  mb-4 bg-secondaryGreen rounded-2xl `}>
                <div className={`w-full`}>
                    <div className={`bg-${color} italic text-xs text-transparent rounded-2xl h-${height}`}
                    style={{ width: `${porcentagem}%` }}>exp</div>
                </div>
            </div>
        </div>
    )
}