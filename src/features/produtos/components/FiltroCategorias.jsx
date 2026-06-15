import { useContext } from "react";

import { AppContext } from "../../../app/providers/AppContext";

export function FiltroCategorias() {
  const { produtos } = useContext(AppContext);

  const categorias = produtos.reduce((acc, produto) => {
    if (!acc.includes(produto.category)) {
      acc.push(produto.category);
    }

    return acc;
  }, []);

  const capitalize = (texto) =>
    texto.replace(/\b\w/g, (letra) => letra.toUpperCase());

  return (
    <div className="flex items-center justify-center w-full bg-olive-400 p-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)]">
      <p className="text-2xl">Filtro de selecao:</p>
      {categorias.map((categoria) => (
        <a
          key={categoria}
          href="#"
          className="p-1 m-1 bg-amber-200 rounded-md shadow-[inset_0_1px_3px_rgba(255,255,255,0.5)] hover:shadow-lg transition"
        >
          {capitalize(categoria)}
        </a>
      ))}
    </div>
  );
}
