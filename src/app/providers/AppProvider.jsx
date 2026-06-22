import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchApi } from "../../features/produtos/services/fetchApiProdutos";
import { Loading } from "../../shared/components/Loading";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [frete, setFrete] = useState(0);
  const [produtos, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);

  const [carrinho, setCarrinho] = useState(() => {
    const produtosSalvos = localStorage.getItem("produtosSalvos");

    return produtosSalvos
      ? JSON.parse(produtosSalvos)
      : [];
  });

  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const categorias = produtos.reduce((acc, produto) => {
    if (!acc.includes(produto.category)) {
      acc.push(produto.category);
    }

    return acc;
  }, []);

  const listaFiltrada = produtos.filter((item) => {
    const correspondePesquisa = item.title
      ?.trim()
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    const correspondeCategoria =
      !categoriaSelecionada || item.category === categoriaSelecionada;

    return correspondePesquisa && correspondeCategoria;
  });

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
    toast.success(`${produto.title} adicionado ao carrinho!`)
  }

  function removerCarrinho(id) {
    const novaLista = carrinho.filter(
      (produto) => produto.id !== id
    );

    setCarrinho(novaLista);
  }

  useEffect(() => {
    localStorage.setItem(
      "produtosSalvos",
      JSON.stringify(carrinho)
    );
  }, [carrinho]);

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
        categorias,
        categoriaSelecionada,
        setPesquisa,
        setCategoriaSelecionada,
        adicionarCarrinho,
        removerCarrinho,
        frete,
        setFrete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
