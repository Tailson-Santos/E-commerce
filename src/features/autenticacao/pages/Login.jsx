import { Link } from "react-router-dom";

import { Banner } from "../../../shared/components/Banner";

export function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Banner />

      <form
        className="
          w-full
          md:w-1/2
          min-h-screen
          flex
          flex-col
          justify-center
          items-center
          gap-5
          px-6
          bg-[var(--color-light)]
        "
      >
        <h1 className="text-3xl font-bold mb-5">Login</h1>

        <div className="flex flex-col w-full max-w-sm">
          <label htmlFor="login" className="mb-1">
            Login
          </label>

          <input
            type="text"
            id="login"
            placeholder="Digite seu login"
            className="
              border
              p-3
              rounded-lg
              outline-none
              focus:border-green-600
            "
          />
        </div>

        <div className="flex flex-col w-full max-w-sm">
          <label htmlFor="senha" className="mb-1">
            Senha
          </label>

          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            className="
              border
              p-3
              rounded-lg
              outline-none
              focus:border-green-600
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full
            max-w-sm
            bg-green-700
            text-white
            p-3
            rounded-lg
            hover:bg-green-800
            transition
          "
        >
          Entrar
        </button>

        <span className="text-gray-700">ou</span>

        <Link
          to="/cadastro"
          className="
            w-full
            max-w-sm
            border
            border-green-700
            text-green-700
            p-3
            rounded-lg
            hover:bg-green-700
            hover:text-white
            transition
            text-center
          "
        >
          Cadastrar
        </Link>
      </form>
    </div>
  );
}
