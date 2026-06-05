import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

export function CarrosselPromocao() {
  const { produtos } = useContext(AppContext);

  const [indiceAtual, setIndiceAtual] = useState(0);

  const produtosPromocao = [...produtos]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) =>
        prev === produtosPromocao.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, [produtosPromocao.length]);

  if (!produtosPromocao.length) return null;

  const produto = produtosPromocao[indiceAtual];

  return (
    <section
      className="
        w-full
        bg-gradient-to-r
        from-red-500
        to-orange-400
        text-white
        p-5
        rounded-xl
        shadow-lg
      "
    >
      <h2 className="text-3xl font-bold mb-6">
        🔥 Promoção do Dia
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={produto.image}
            alt={produto.title}
            className="
              h-72
              object-contain
              bg-white
              rounded-xl
              p-4
            "
          />
        </div>

        <div>
          <span
            className="
              bg-yellow-300
              text-black
              px-3
              py-1
              rounded-full
              font-bold
            "
          >
            50% OFF
          </span>

          <h3 className="text-3xl font-bold mt-4">
            {produto.title}
          </h3>

          <p className="mt-4 line-clamp-3">
            {produto.description}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-xl line-through opacity-70">
              R$ {produto.price.toFixed(2)}
            </span>

            <span className="text-4xl font-bold">
              R$ {(produto.price * 0.5).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {produtosPromocao.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndiceAtual(index)}
            className={`
              w-3
              h-3
              rounded-full
              cursor-pointer
              ${
                indiceAtual === index
                  ? "bg-white"
                  : "bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}