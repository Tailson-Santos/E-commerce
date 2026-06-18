import { useContext } from "react";

import { AppContext } from "../../../app/providers/AppContext";
import { Header } from "../../../shared/components/Header";
import { BuscarCep } from "../../frete/components/BuscarCep";

export function Carrinho() {
  const { carrinho, removerCarrinho, frete } =
    useContext(AppContext);

  const subtotal = carrinho.reduce(
    (acc, item) =>
      acc + item.price * item.quantidade,
    0
  );

  const total = subtotal + frete;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          Meu Carrinho
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Produtos */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {carrinho.length === 0 ? (
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <p className="text-gray-500 text-lg">
                    Seu carrinho está vazio.
                  </p>
                </div>
              ) : (
                carrinho.map((item) => (
                  <div
                    key={item.id}
                    className="
                      bg-white
                      p-4
                      rounded-xl
                      shadow
                      flex
                      justify-between
                      items-center
                    "
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-24
                          h-24
                          object-contain
                        "
                      />

                      <div>
                        <h2 className="font-bold">
                          {item.title}
                        </h2>

                        <p className="text-green-600 font-bold">
                          R$ {item.price.toFixed(2)}
                        </p>

                        <p className="text-gray-500">
                          Quantidade:{" "}
                          {item.quantidade}
                        </p>

                        <p className="font-semibold">
                          Subtotal: R${" "}
                          {(
                            item.price *
                            item.quantidade
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        removerCarrinho(item.id)
                      }
                      className="
                        bg-red-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        hover:bg-red-700
                        transition
                      "
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6">
              <BuscarCep />
            </div>
          </div>

          {/* Resumo */}
          <div>
            <div
              className="
                bg-white
                rounded-xl
                shadow-lg
                p-6
                sticky
                top-4
              "
            >
              <h2 className="text-2xl font-bold mb-4">
                Resumo do Pedido
              </h2>

              <div className="flex justify-between mb-3">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span>
                  R$ {subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-3">
                <span className="text-gray-600">
                  Frete
                </span>

                <span>
                  R$ {frete.toFixed(2)}
                </span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span className="text-green-600">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <button
                className="
                  w-full
                  mt-6
                  bg-green-600
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-green-700
                  transition
                "
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}