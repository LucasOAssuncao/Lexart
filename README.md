# Aplicação de Web Scrapping para Teste de Processo Seletivo da Lexart

Este é um projeto desenvolvido como parte do processo seletivo da Lexart. A aplicação consiste em fazer scrap das plataformas Mercado Livre e Buscapé para coletar informações sobre televisores, celulares e geladeiras. As informações são armazenadas em um banco de dados e são posteriormente usadas para exibição no frontend.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- React.js
- Vite.js
- TypeScript

## Você pode usar a aplicação pelo deploy ou pode instalar.
 `https://lexart.vercel.app/`

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando na pasta do backend:

`npm install`

E depois execute o mesmo comando na pasta do frontend:

`npm install`

## Execução

Backend
Para executar o servidor do backend, use o seguinte comando:


`npm run dev`

Isso iniciará o servidor em http://localhost:3000.

Frontend
Para executar o frontend, use o seguinte comando:

`npm run dev`

Isso iniciará o servidor em http://localhost:8080.

## Uso
Ao acessar a página do frontend, você verá uma barra de pesquisa onde pode inserir o produto desejado e dois Selects onde poderá escolher entre as categorias(televisores, celulares ou geladeiras) e os sites(MercadoLivre ou Buscape). Depois de pesquisar, os resultados serão exibidos na tela. O backend scrapará as informações relevantes dos sites Mercado Livre e Buscapé e armazenará essas informações no banco de dados.
