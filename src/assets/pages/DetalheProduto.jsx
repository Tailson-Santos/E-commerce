import { useContext } from "react";



import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { AppContext } from "../../App";
import { Header } from "../componentes/Header";

export function DetalheProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    produtos,
    adicionarCarrinho,
  } = useContext(AppContext);

  const produto = produtos.find(
    (item) => item.id === Number(id)
  );

  if (!produto) {
    return (
      <div className="min-h-screen">
        <Header />

        <div className="flex justify-center items-center h-[80vh]">
          <h1 className="text-3xl font-bold">
            Produto não encontrado
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-5xl mx-auto px-1 py-1">

        {/* Botão Voltar */}
        <button
          onClick={() => navigate("/")}
          className="
            mb-6
            flex
            items-center
            gap-2
            bg-white
            px-4
            py-2
            rounded-lg
            shadow
            hover:bg-gray-100
            transition
            cursor-pointer
          "
        >
          <span className="material-symbols-outlined">
            arrow_back
          </span>

          Voltar para Produtos
        </button>

        {/* Card do Produto */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-lg
            overflow-hidden
            grid
            md:grid-cols-2
            gap-10
            p-6
          "
        >
          {/* Imagem */}
          <div className="flex items-center justify-center">
            <img
              src={produto.image}
              alt={produto.title}
              className="
                max-h-[450px]
                w-full
                object-contain
                transition
                duration-300
                hover:scale-105
              "
            />
          </div>

          {/* Informações */}
          <div className="flex flex-col justify-center gap-5">
            <span
              className="
                w-fit
                bg-gray-100
                text-gray-600
                px-3
                py-1
                rounded-full
                text-sm
              "
            >
              {produto.category}
            </span>

            <h1 className="text-4xl font-bold">
              {produto.title}
            </h1>

            <p className="text-gray-600 leading-relaxed">
              {produto.description}
            </p>

            <div className="border-y py-5">
            <p className="text-5xl font-bold text-green-600">
                R$ {produto.price}
              </p>
            </div>

            <button
              onClick={() =>
                adicionarCarrinho(produto)
              }
              className="
                bg-green-700
                text-white
                py-4
                rounded-xl
                font-semibold
                text-lg
                hover:bg-green-800
                transition
                cursor-pointer
              "
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}