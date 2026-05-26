import { Conteudo } from "../componentes/Conteudo"

export function Home({ produtos, adicionarCarrinho }) {
    return (
        <Conteudo
            produtos={produtos}
            adicionarCarrinho={adicionarCarrinho}
        />
    )
}