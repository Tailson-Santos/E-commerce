import { useState, useEffect } from 'react'
import { fetchApi } from './assets/services/fetchAPI'
import { Loading } from './assets/pages/Loading'


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
    
     

    </div>
  )
}

export default App