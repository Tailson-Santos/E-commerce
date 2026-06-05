import { Header } from "../componentes/Header";
import { CarrosselPromocao } from "../componentes/CarrosselPromocao";
import { Conteudo } from "../componentes/Conteudo";

export function Home() {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto p-2">
        <CarrosselPromocao />
      </div>

      <Conteudo />
    </>
  );
}