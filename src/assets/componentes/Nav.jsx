import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

export function Nav() {
  const [aberto, setAberto] = useState(false);

  const { carrinho } = useContext(AppContext);

  const quantidadeTotal = carrinho.reduce((acc, item) => {
    return acc + item.quantidade;
  }, 0);

  return (
    <nav className="relative">
      {/* BOTÃO HAMBÚRGUER */}
      <button
        onClick={() => setAberto(!aberto)}
        className="md:hidden"
      >
        <span className="material-symbols-outlined text-3xl">
          menu
        </span>
      </button>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-5 items-center">
        <Link to="/login">
          <span className="material-symbols-outlined">
            person
          </span>
        </Link>

        <Link to="/">
          <span className="material-symbols-outlined">
            home
          </span>
        </Link>

        <Link
          to="/carrinho"
          className="relative"
        >
          <span className="material-symbols-outlined">
            shopping_cart
          </span>

          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-600
              rounded-full
              text-white
              text-xs
              min-w-[18px]
              h-[18px]
              flex
              items-center
              justify-center
              px-1
            "
          >
            {quantidadeTotal}
          </span>
        </Link>
      </div>

      {/* MENU MOBILE */}
      {aberto && (
        <div
          className="
            absolute
            right-0
            top-12
            flex
            flex-col
            bg-white
            shadow-lg
            p-4
            rounded
            gap-4
            md:hidden
            z-50
          "
        >
          <Link
            to="/"
            onClick={() => setAberto(false)}
          >
            <span className="material-symbols-outlined">
              home
            </span>
          </Link>

          <Link
            to="/login"
            onClick={() => setAberto(false)}
          >
            <span className="material-symbols-outlined">
              person
            </span>
          </Link>

          <Link
            to="/carrinho"
            className="relative"
            onClick={() => setAberto(false)}
          >
            <span className="material-symbols-outlined">
              shopping_cart
            </span>

            <span
              className="
                absolute
                -top-2
                -right-2
                bg-red-600
                rounded-full
                text-white
                text-xs
                min-w-[18px]
                h-[18px]
                flex
                items-center
                justify-center
                px-1
              "
            >
              {quantidadeTotal}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}