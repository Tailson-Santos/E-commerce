import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchApi } from "../../features/produtos/services/fetchApiProdutos";
import { Loading } from "../../shared/components/Loading";
import { AppContext } from "./AppContext";
import { supabase } from "../../services/supabase";
import { logout as apiLogout } from "../../features/autenticacao/services/auth";

export function AppProvider({ children }) {
  const [frete, setFrete] = useState(0);
  const [produtos, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("AppProvider: Sessão inicial:", session?.user?.email || "Nenhuma");
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("AppProvider: Auth change event:", _event, session?.user?.email || "Nenhum");
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    async function carregarPerfil() {
      if (user) {
        console.log("AppProvider: Buscando perfil no Supabase para ID:", user.id);
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select("nome, email")
            .eq("id", user.id)
            .single();

          if (error) {
            console.warn("AppProvider: Erro ao buscar da tabela profiles, aplicando fallback:", error.message);
            setProfile({
              nome: user.user_metadata?.nome || "",
              email: user.email || "",
            });
          } else {
            console.log("AppProvider: Perfil carregado com sucesso:", data);
            setProfile(data);
          }
        } catch (error) {
          console.error("AppProvider: Exceção ao buscar perfil:", error);
          setProfile({
            nome: user.user_metadata?.nome || "",
            email: user.email || "",
          });
        }
      } else {
        setProfile(null);
      }
    }

    carregarPerfil();
  }, [user]);

  async function logout() {
    try {
      await apiLogout();
      toast.success("Sessão encerrada!");
    } catch (error) {
      toast.error("Erro ao fazer logout: " + error.message);
    }
  }

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
        user,
        profile,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
