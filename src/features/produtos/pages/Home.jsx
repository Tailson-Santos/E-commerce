import { Header } from "../../../shared/components/Header";
import { Conteudo } from "../components/Conteudo";
import { FiltroCategorias } from "../components/FiltroCategorias";

export function Home() {
  return (
    <main>
      <Header />

      <FiltroCategorias />
      <Conteudo />
    </main>
  );
}
