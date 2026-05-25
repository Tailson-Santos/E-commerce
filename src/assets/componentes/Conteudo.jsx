import { ListaProdutos } from "./ListaProdutos"
export function Conteudo({produtos}){
    return(
        <main className="bg-[var(--color-light)]">
            <ListaProdutos produtos={produtos}/>
        </main>
    )
}