// Componente select

export default function Select({
    label,
    error,
    htmlFor,
    name,
    onchange,
    value,
    options = [],
}){
    
    return(
        <div>
            {/* Label solo se muestra si es Truthy un uno logico */}
            {label &&(
            <label 
                htmlFor={htmlFor}
                className="
                    block 
                    text-caption
                    text-secondary
                    "
            >
                {label}
            </label>
            )}

            {/*Select*/}
            <select 
                onChange={onchange}
                value={value}
                name={name}
                id="htmlFor"
                className="
                    w-80
                    h-12
                    rounded-md
                    border
                    border-gray-400
                    px-4
                    bg-gray-100
                    
                    hover:border-2
                    hover:bg-[var(--gray-50)]
            "
            >

            <option value="">Seleccione la opcion</option>

            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}

            </select>

            {error && (
                    <p className="text-caption text-red-800 place-self-start mt-2">{error}</p>
            )}

        </div>
    );
}