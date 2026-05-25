const BASE = "https://fakestoreapi.com/products"

export async function fetchApi() {
  try {
    const response = await fetch(BASE)

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos")
    }

    const dados = await response.json()

    return {
      dados,
      loading: false,
      error: null
    }

  } catch (erro) {
    return {
      dados: null,
      loading: false,
      error: erro.message
    }
  }
}