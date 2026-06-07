import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { DetalheProduto } from "./assets/pages/DetalheProduto";

import { fetchApi } from "./assets/services/fetchApiProdutos";
import { Loading } from "./assets/componentes/Loading";

import { Home } from "./assets/pages/Home";
import { Carrinho } from "./assets/pages/Carrinho";
import { Login } from "./assets/pages/Login";

import { Footer } from "./assets/componentes/Footer";
import { Cadastro } from "./assets/pages/Cadastro";


export const AppContext = createContext();

function App() {
  const [produtos, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const listaFiltrada = produtos.filter((item) =>
    item.title?.trim().toLowerCase().includes(
      pesquisa.toLowerCase()
    )
  );

  function adicionarCarrinho(produto) {
    const produtoExiste = carrinho.find(
      (item) => item.id === produto.id
    );

    if (produtoExiste) {
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === produto.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);
    } else {
      setCarrinho((prev) => [
        ...prev,
        {
          ...produto,
          quantidade: 1,
        },
      ]);
    }
  }

  function removerCarrinho(id) {
    const novaLista = carrinho.filter(
      (produto) => produto.id !== id
    );

    setCarrinho(novaLista);
  }

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const { dados } = await fetchApi();
        setProduto(dados);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        produtos: listaFiltrada,
        carrinho,
        pesquisa,
        setPesquisa,
        adicionarCarrinho,
        removerCarrinho,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/produto/:id" element={<DetalheProduto />}/>
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer/>
    </AppContext.Provider>
  );
}

export default App;