import { useContext } from "react";
import { AppContext } from "../../App";
import {Header} from "../componentes/Header"

export function Carrinho() {
  const { carrinho, removerCarrinho } =
    useContext(AppContext);

  const total = carrinho.reduce((acc, item) => {
    return acc + item.price * item.quantidade;
  }, 0);

  return (
    <div className="h-screen">
    <Header/>
      <h1 className="text-3xl font-bold mb-5">
        Meu Carrinho
      </h1>

      <div className="flex flex-col gap-4">
        {carrinho.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              p-4
              rounded-lg
              shadow
              flex
              gap-4
              items-center
              justify-between
            "
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              <div>
                <p className="font-bold">
                  {item.title}
                </p>

                <p className="text-green-600 font-bold">
                  R$ {item.price}
                </p>

                <p className="text-sm text-gray-500">
                  Quantidade: {item.quantidade}
                </p>

                <p className="font-semibold">
                  Subtotal: R$
                  {" "}
                  {(item.price * item.quantidade).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removerCarrinho(item.id)}
              className="
                bg-red-600
                text-white
                px-3
                py-1
                rounded
                hover:bg-red-700
                transition
              "
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 text-2xl font-bold">
        Total: R$ {total.toFixed(2)}
      </div>
    </div>
  );
}