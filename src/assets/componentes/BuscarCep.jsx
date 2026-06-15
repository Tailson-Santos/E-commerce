import { useState } from "react";
import { buscarCep as fetchApiCep } from "../services/fetchApiCep";

export function BuscarCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);

  async function handleBuscarCep() {
    try {
        const dados = await fetchApiCep(cep);
        setEndereco(dados);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" flex items-center justify-center p-1 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-2">
        <h1 className="text-2xl font-bold text-center mb-1">
          Calcular Frete
        </h1>

        <div className="flex gap-1 text-black">
        <input
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            type="text"
            placeholder="Digite o CEP"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 !text-black placeholder:!text-gray-500"
            />

          <button
            onClick={handleBuscarCep}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Buscar
          </button>
        </div>

        {endereco && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-3">
              Endereço Encontrado
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">📍 Rua:</span>{" "}
                {endereco.logradouro}
              </p>

              <p>
                <span className="font-semibold">🏘 Bairro:</span>{" "}
                {endereco.bairro}
              </p>

              <p>
                <span className="font-semibold">🏙 Cidade:</span>{" "}
                {endereco.localidade}
              </p>

              <p>
                <span className="font-semibold">🗺 UF:</span>{" "}
                {endereco.uf}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}