import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Banner } from "../../../shared/components/Banner";
import { cadastrar } from "../services/auth";

export function Cadastro() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!form.email || !form.senha) {
        toast.warn("Preencha email e senha.");
        return;
      }

      await cadastrar(form.email, form.senha);

      setForm({
        email: "",
        senha: "",
      });

      toast.success("Cadastro feito! Verifique seu email para confirmar a conta.");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Banner />

      <form
        onSubmit={handleSubmit}
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
        <h1 className="text-3xl font-bold mb-5">Cadastro</h1>

        <div className="flex flex-col w-full max-w-sm">
          <label htmlFor="email" className="mb-1">
            Email
          </label>

          <input
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            value={form.email}
            type="email"
            id="email"
            placeholder="Digite seu email"
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
            onChange={(e) =>
              setForm({
                ...form,
                senha: e.target.value,
              })
            }
            value={form.senha}
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
          Cadastrar
        </button>

        <span className="text-gray-700">Ja possui uma conta?</span>

        <Link
          to="/login"
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
          Fazer Login
        </Link>
      </form>
    </div>
  );
}
