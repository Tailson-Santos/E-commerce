export async function buscarCep(cep) {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );
  
      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.erro) {
        throw new Error("CEP não encontrado");
      }
  
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }