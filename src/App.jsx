import { useState, useEffect } from 'react'
import { fetchApi } from './assets/services/fetchApiProdutos'
import { Loading } from './assets/componentes/Loading'
import { Header } from './assets/componentes/Header'
import { Conteudo } from './assets/componentes/Conteudo'
import { Routes, Route } from "react-router-dom"
import { Home } from "./assets/pages/Home"
import { Carrinho } from './assets/pages/Carrinho'


function App() {

  const [produtos, setProduto] = useState([])
  const [loading, setLoading] = useState(true)
  const [carrinho, setCarrinho] = useState([])

  function adicionarCarrinho(produto) {

    const produtoExiste = carrinho.find((item)=> item.id === produto.id);

    if(produtoExiste){
      const novoCarrinho = carrinho.map((item)=>{
        if(item.id === produto.id){
          return {
            ...item,
            quantidade: item.quantidade + 1
          }
        }
        return item

      })
      setCarrinho(novoCarrinho)
    }else{
      setCarrinho((prev)=>[
        ...prev,
        {...produto,quantidade:1}
      ])
    }
  }

  function removerCarrinho(id){
    const novaLista = carrinho.filter((produto)=>produto.id !== id)
    setCarrinho(novaLista)
  }


  useEffect(() => {

    async function carregarProdutos() {

      try {

        const { dados } = await fetchApi()

        setProduto(dados)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }
    }

    carregarProdutos()

  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
  
      <Header carrinho={carrinho} />
  
      <Routes>
  
        <Route
          path="/"
          element={
            <Home
              produtos={produtos}
              adicionarCarrinho={adicionarCarrinho}
              removerCarrinho={removerCarrinho}
            />
          }
        />
  
        <Route
          path="/carrinho"
          element={
            <Carrinho carrinho={carrinho}
            removerCarrinho={removerCarrinho} />
          }
        />
  
      </Routes>
  
    </div>
  )
}

export default App