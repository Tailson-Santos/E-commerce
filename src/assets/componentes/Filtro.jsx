export function Filtro({className}) {
    return (
        <div className={`relative w-64 ${className}`}>
        
        <input
          type="text"
          name="filtro"
          id="filtro"
          placeholder="Filtro de Pesquisa"
          className="w-full border rounded-lg py-2 pl-4 pr-10 outline-none text-[19px]"
        />
  
        <button className="hover:cursor-pointer">
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            search
            </span>
        </button>
  
      </div>
    )
  }