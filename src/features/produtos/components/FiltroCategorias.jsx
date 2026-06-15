import { useContext } from "react";

import { AppContext } from "../../../app/providers/AppContext";

export function FiltroCategorias() {
  const {
    categorias,
    categoriaSelecionada,
    setCategoriaSelecionada,
  } = useContext(AppContext);

  const capitalize = (texto) =>
    texto.replace(/\b\w/g, (letra) => letra.toUpperCase());

  return (
    <div className="flex items-center justify-center w-full bg-olive-400 p-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)]">
      <p className="text-2xl">Filtro de selecao:</p>
      <button
        type="button"
        onClick={() => setCategoriaSelecionada("")}
        className={`
          p-1
          m-1
          rounded-md
          shadow-[inset_0_1px_3px_rgba(255,255,255,0.5)]
          hover:shadow-lg
          transition
          cursor-pointer
          ${!categoriaSelecionada ? "bg-green-700 text-white" : "bg-amber-200"}
        `}
      >
        Todos
      </button>

      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() => setCategoriaSelecionada(categoria)}
          className={`
            p-1
            m-1
            rounded-md
            shadow-[inset_0_1px_3px_rgba(255,255,255,0.5)]
            hover:shadow-lg
            transition
            cursor-pointer
            ${
              categoriaSelecionada === categoria
                ? "bg-green-700 text-white"
                : "bg-amber-200"
            }
          `}
        >
          {capitalize(categoria)}
        </button>
      ))}
    </div>
  );
}
