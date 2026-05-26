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
    setCarrinho((prev) => [...prev, produto])
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
            />
          }
        />
  
        <Route
          path="/carrinho"
          element={
            <Carrinho carrinho={carrinho} />
          }
        />
  
      </Routes>
  
    </div>
  )
}

export default App