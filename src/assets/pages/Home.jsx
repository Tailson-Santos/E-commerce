import { Conteudo } from "../componentes/Conteudo"

export function Home({ produtos, adicionarCarrinho,removerCarrinho }) {
    console.log("Home:", produtos)
    return (
        <Conteudo
            produtos={produtos}
            adicionarCarrinho={adicionarCarrinho}
            removerCarrinho={removerCarrinho}
        />
    )
}