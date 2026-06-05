import { Header } from "../componentes/Header";
import { Conteudo } from "../componentes/Conteudo";

export function Home({
  produtos,
  adicionarCarrinho,
  removerCarrinho,
  carrinho,
  pesquisa,
  setPesquisa,
}) {
  return (
    <main>
      <Header
        carrinho={carrinho}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />

      <Conteudo
        produtos={produtos}
        adicionarCarrinho={adicionarCarrinho}
        removerCarrinho={removerCarrinho}
      />
    </main>
  );
}