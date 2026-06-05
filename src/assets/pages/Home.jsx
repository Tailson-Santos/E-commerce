import { Header } from "../componentes/Header";
import { Conteudo } from "../componentes/Conteudo";
import {FiltroCategorias} from "../componentes/FiltroCategorias"


export function Home() {
  return (
    <main>
        
      <Header />
      
      <FiltroCategorias/>
      <Conteudo />
    </main>
  );
}