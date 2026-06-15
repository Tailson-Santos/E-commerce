import { useEffect, useState } from "react";

import { getUsers, postUsers } from "../../features/autenticacao/services/CRUD";
import { fetchApi } from "../../features/produtos/services/fetchApiProdutos";
import { Loading } from "../../shared/components/Loading";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [produtos, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const listaFiltrada = produtos.filter((item) =>
    item.title?.trim().toLowerCase().includes(pesquisa.toLowerCase())
  );

  function adicionarCarrinho(produto) {
    const produtoExiste = carrinho.find((item) => item.id === produto.id);

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
    const novaLista = carrinho.filter((produto) => produto.id !== id);

    setCarrinho(novaLista);
  }

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const { dados } = await fetchApi();
        setProduto(dados ?? []);
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
        postUsers,
        getUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
