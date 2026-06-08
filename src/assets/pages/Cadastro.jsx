
import { useContext } from "react";
import { AppContext } from "../../App";

import { Link } from "react-router-dom";
import { Banner } from "../componentes/Banner";
import { useState } from "react";

export function Cadastro() {
  const {postUsers} = useContext(AppContext)
  

 const [form,setForm] = useState({
  login:"",
  senha:"",
})

async function handleSubmit(e) {
  e.preventDefault();

  try {
    if(form.login && form.senha) return

    const usuario = await postUsers(form);
    
    console.log(usuario);

    setForm({
      login: "",
      senha: "",
    });
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <Banner/>

      {/* Formulário */}
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
        <h1 className="text-3xl font-bold mb-5">
          Cadastro
        </h1>


        <div className="flex flex-col w-full max-w-sm">
          <label htmlFor="login" className="mb-1">
            Login
          </label>

          <input
            onChange={(e)=>setForm({
              ...form,
              login: e.target.value
            })}
            value={form.login}
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
           onChange={(e)=> setForm({
            ...form,
            senha: e.target.value
          })}
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

        <span className="text-gray-700">
          Já possui uma conta?
        </span>

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