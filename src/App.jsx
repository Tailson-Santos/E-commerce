import { useState, useEffect } from 'react'
import { fetchApi } from './assets/services/fetchApiProdutos'
import { Loading } from './assets/componentes/Loading'
import { Header } from './assets/componentes/Header'
import { Conteudo } from './assets/componentes/Conteudo'



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
        <Conteudo produtos={produtos}/>
        
    </div>
  )
}

export default App