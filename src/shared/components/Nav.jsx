import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../app/providers/AppContext";

export function Nav() {
  const [aberto, setAberto] = useState(false);

  const { carrinho, user, profile, logout } = useContext(AppContext);

  const quantidadeTotal = carrinho.reduce((acc, item) => {
    return acc + item.quantidade;
  }, 0);

  return (
    <nav className="relative">
      <button onClick={() => setAberto(!aberto)} className="md:hidden">
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>

      <div className="hidden md:flex gap-5 items-center">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700">
              Olá, {profile?.nome || user.email?.split("@")[0]}
            </span>
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-800 transition cursor-pointer flex items-center"
              title="Sair"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        ) : (
          <Link to="/login" title="Fazer Login">
            <span className="material-symbols-outlined">person</span>
          </Link>
        )}

        <Link to="/">
          <span className="material-symbols-outlined">home</span>
        </Link>

        <Link to="/carrinho" className="relative">
          <span className="material-symbols-outlined">shopping_cart</span>

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
          {user && (
            <span className="text-xs font-semibold text-gray-500 border-b pb-2">
              Olá, {profile?.nome || user.email?.split("@")[0]}
            </span>
          )}

          <Link to="/" onClick={() => setAberto(false)}>
            <span className="material-symbols-outlined">home</span>
          </Link>

          {user ? (
            <button
              onClick={() => {
                logout();
                setAberto(false);
              }}
              className="text-red-600 hover:text-red-800 transition cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm">Sair</span>
            </button>
          ) : (
            <Link to="/login" onClick={() => setAberto(false)}>
              <span className="material-symbols-outlined">person</span>
            </Link>
          )}

          <Link
            to="/carrinho"
            className="relative"
            onClick={() => setAberto(false)}
          >
            <span className="material-symbols-outlined">shopping_cart</span>

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
