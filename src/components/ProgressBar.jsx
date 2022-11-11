export default function ProgressBar({valor, height, width, color}) {
    return (
        <div className={`${width} bg-gray-200  mb-4 dark:bg-gray-700 rounded-2xl `}>
            <div className={`w-full h-${height}`}>
                <div className={`bg-${color} italic text-xs text-transparent rounded-2xl h-${height}`}
                style={{ width: `${valor}%` }}>exp</div>
            </div>
        </div>
    )
}