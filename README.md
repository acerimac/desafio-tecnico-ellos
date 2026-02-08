# Arcana Store

## Visão Geral do Projeto - Arcana Store

Este projeto consiste no desenvolvimento de uma landing page, voltada para fãs do universo de magia e fantasia, com forte inspiração em fanbases como Harry Potter, além de outros mundos mágicos e imaginários.

O objetivo do projeto é oferecer produtos temáticos que permitam aos clientes expressarem sua identidade e conexão com esses universos.

A proposta da Arcana Store vai além da venda de produtos: busca criar uma experiência imersiva, mágica e acolhedora, desde o primeiro contato com o site até a finalização da compra.

---

## Identidade Visual e Prototipação

A identidade visual da Arcana Store foi desenvolvida com o objetivo de transmitir um clima mágico, misterioso e imersivo. Para isso, foram definidos:

- Paleta de cores em tons de roxo, dourado, azul e preto
- Elementos visuais inspirados em magia e fantasia
- Tipografia temática
- Layout escuro com destaques luminosos

Para fazer a prototipação e criação usei o Figma, que me ajudou a decidir quais seriam os espaçamentos e padrões visuais para o projeto, além da identidade visual e da experiência do usuário.

Link do projeto pelo Figma:  
https://www.figma.com/design/88ghDlMSRvlUNR6uEM7uyj/arcana-store?node-id=0-1&t=1RmP9fjk2jtjpVev-1

---

## Como Rodar o Projeto

Ter o Node.js instalado.

Instalar as dependências:
```
npm install
```

Gerar o CSS a partir do SCSS:
```
npm run sass:build
```
ou
```
npm run sass:watch
```
para atualizar automaticamente.

Abrir o arquivo index.html no navegador.

O site é estático, não precisa de servidor.

---

## Tecnologias Usadas

- HTML
- JavaScript
- Sass para gerar o CSS

---

## Estrutura do Projeto

- index.html → estrutura da página
- style.scss → onde os estilos são editados
- style.css → CSS gerado automaticamente
- main.js → interações da página (menu, scroll, FAQ)
- assets/ → imagens e ícones

---

## O Que o Site Faz

- Header fixo com menu e telefone
- Muda de estilo ao rolar a página
- No celular vira menu hambúrguer
- Navegação por âncoras com scroll suave

Seções bem definidas:
- Home
- Quem somos
- Serviços
- Dúvidas (FAQ)
- Sugestões
- Produtos
- Rodapé

- FAQ em formato de acordeão
- Animações suaves quando as seções aparecem na tela
- Totalmente responsivo para celular, tablet e desktop

---

## Organização do Código

- HTML semântico, usando header, section, nav, footer
- CSS organizado em SCSS, com padrões de nome e responsividade
- JavaScript simples e organizado, rodando após o carregamento da página

---

## Observação

Os formulários são apenas visuais e não enviam dados.

O foco do projeto é front-end e organização de código.

---

Arcana Store – Vista sua casa. Viva sua magia.
