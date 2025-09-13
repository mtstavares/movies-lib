# 🎬 MoviesLib — Biblioteca de Filmes com React + Vite (TMDB)

Uma aplicação didática para listar, buscar e visualizar detalhes de filmes usando a **API do The Movie Database (TMDB)**.  
Feita com **React + Vite**, foco em **boas práticas**, **responsividade**, **acessibilidade** e **código limpo**.

> 💡 Projeto pensado para aprendizado: o código foi feito seguindo padrões para tratamento de erros, loadings, encode de query e CSS responsivo.

---

## ✨ Funcionalidades

- **Top Rated**: lista dos filmes mais bem avaliados (endpoint `/movie/top_rated`).
- **Busca**: pesquisa de filmes por texto (`/search/movie`) com query codificada.
- **Detalhes**: página do filme com poster, sinopse, orçamento, receita e duração.
- **Card reutilizável**: componente `MovieCard` para exibir itens no grid.
- **Responsivo**: grid que quebra em 3→2→1 colunas conforme o tamanho da tela.
- **Estados de UI**: loaders, mensagens de erros e “nenhum resultado”.

---

## 🧱 Stack

- **React 18** + **Vite**
- **React Router DOM**
- **React Icons**
- **Fetch API**