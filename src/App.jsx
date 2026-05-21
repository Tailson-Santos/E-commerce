import { useState, useEffect } from 'react'
import { fetchApi } from './assets/services/fetchAPI'
import { Loading } from './assets/componentes/Loading'
import { Header } from './assets/componentes/Header'



function App() {

  const [produtos, setProduto] = useState([])
  const [loading, setLoading] = useState(true)

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
        <Header/>
        
    </div>
  )
}

export default App