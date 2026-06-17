# E-commerce

Projeto de e-commerce desenvolvido com React, Vite e Tailwind CSS. A aplicacao simula uma loja virtual com listagem de produtos, busca, detalhes do produto, carrinho de compras, calculo de frete por CEP e telas de login/cadastro.

## Funcionalidades

- Listagem de produtos consumidos da Fake Store API
- Busca de produtos por nome
- Filtro de produtos por categoria
- Pagina de detalhes para cada produto
- Adicao de produtos ao carrinho
- Controle de quantidade no carrinho
- Calculo do total da compra
- Consulta de endereco por CEP usando a API ViaCEP
- Telas de login e cadastro
- Menu responsivo para dispositivos moveis
- Interface estilizada com Tailwind CSS
- Persistir o carrinho no localStorage

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Context API
- Fake Store API
- ViaCEP API
- JSON Server

## Como executar o projeto

Clone o repositorio:

```bash
git clone https://github.com/Tailson-Santos/E-commerce.git
```

Acesse a pasta do projeto:

```bash
cd E-commerce
```

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Para usar o cadastro de usuarios com JSON Server, execute em outro terminal:

```bash
npx json-server db.json --port 3001
```

## Estrutura do projeto

```text
src/
  app/
    providers/
    App.jsx
  features/
    autenticacao/
    carrinho/
    frete/
    produtos/
  shared/
    components/
  assets/
  main.jsx
  index.css
```

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como componentizacao, gerenciamento de estado com Context API, consumo de APIs externas, rotas com React Router, manipulacao de formularios e criacao de interfaces responsivas com Tailwind CSS.

## Melhorias futuras

- Implementar autenticacao completa no login
- Melhorar a validacao dos formularios
- Criar mensagens de sucesso e erro para o usuario
- Fazer deploy da aplicacao


