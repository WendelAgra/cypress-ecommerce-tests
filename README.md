# Projeto de Automação de Testes com Cypress 🚀

Este repositório contém uma suíte de testes de ponta a ponta (E2E) desenvolvida com Cypress para o site de e-commerce de demonstração [SauceDemo](https://www.saucedemo.com/).

## 🎯 Sobre o Projeto

O objetivo deste projeto foi aplicar e demonstrar habilidades fundamentais em automação de testes de software, cobrindo a jornada completa de um cliente, desde a autenticação até a finalização da compra.

## ✨ Funcionalidades Testadas

- **Autenticação:**
  - Login com usuário válido.
  - Tentativa de login com usuário bloqueado.
  - Logout da aplicação.
- **Inventário e Carrinho:**
  - Adição de produtos ao carrinho.
  - Remoção de produtos do carrinho.
  - Ordenação dos produtos por diferentes critérios (Nome, Preço).
- **Checkout:**
  - Fluxo completo de finalização da compra com sucesso.
  - Validação de erro para o formulário de checkout incompleto.

## 🛠️ Tecnologias e Boas Práticas Utilizadas

- **Ferramenta Principal:** [Cypress](https://www.cypress.io/)
- **Linguagem:** JavaScript
- **Padrões de Projeto:**
  - **Comandos Customizados:** Para reutilização de código e maior legibilidade dos testes.
  - **Organização de Arquivos:** Testes divididos em arquivos por funcionalidade (`autenticacao`, `inventario`, `checkout`).

