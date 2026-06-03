import { Conteudo } from "../componentes/Conteudo"

export function Home({ produtos, adicionarCarrinho,removerCarrinho }) {
    
    return (
        <Conteudo
            produtos={produtos}
            adicionarCarrinho={adicionarCarrinho}
            removerCarrinho={removerCarrinho}
        />
    )
}