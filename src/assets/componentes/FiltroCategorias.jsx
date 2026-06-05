import { useContext } from "react";
import { AppContext } from "../../App";

export function FiltroCategorias() {
  const { produtos } = useContext(AppContext);

  const categorias = produtos.reduce((acc, produto) => {
    if (!acc.includes(produto.category)) {
      acc.push(produto.category);
    }

    return acc;
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      {categorias.map((categoria) => (
        <a
          key={categoria}
          href="#"
          className="p-1 m-1 bg-amber-200"
        >
          {categoria}
        </a>
      ))}
    </div>
  );
}