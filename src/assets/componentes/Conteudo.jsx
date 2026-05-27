import { ListaProdutos } from "./ListaProdutos"
export function Conteudo({produtos,adicionarCarrinho,carrinho,removerCarrinho}){
    return(
        <main className="bg-[var(--color-light)]">
            <ListaProdutos 
            produtos={produtos}
            adicionarCarrinho={adicionarCarrinho}
            carrinho={carrinho}
            removerCarrinho={removerCarrinho}
            />
        </main>
    )
}