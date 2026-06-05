import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export function Card({ produto }) {
  const { adicionarCarrinho } = useContext(AppContext);

  const {
    title: nome,
    price: preco,
    description: descricao,
    category: categoria,
    image: img,
  } = produto;

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-4
        flex
        flex-col
        gap-3
        transition
        duration-300
      "
    >
      <Link to={`/produto/${produto.id}`}>
        <div className="flex justify-center">
          <img
            src={img}
            alt={nome}
            className="h-40 object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg line-clamp-1">
            {nome}
          </h2>

          <p className="text-sm text-gray-500 capitalize">
            {categoria}
          </p>

          <p className="text-sm text-gray-700 line-clamp-3">
            {descricao}
          </p>

          <p className="text-2xl font-bold text-green-600">
            R$ {preco}
          </p>
        </div>
      </Link>

      <div className="flex gap-1 mt-auto">
        <button
          className="
            flex-1
            bg-green-700
            text-white
            p-2
            rounded-lg
            hover:bg-green-800
            transition
            font-medium
            cursor-pointer
          "
        >
          Comprar
        </button>

        <button
          onClick={() => adicionarCarrinho(produto)}
          className="
            flex
            items-center
            justify-center
            w-10
            h-12
            rounded-lg
            bg-blue-600
            text-white
            hover:bg-blue-700
            transition
            cursor-pointer
          "
          title="Adicionar ao carrinho"
        >
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span>
        </button>
      </div>
    </div>
  );
}