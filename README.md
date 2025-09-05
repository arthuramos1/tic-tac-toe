# Tic Tac Toe React

## Visão Geral do Projeto

Este é um jogo da velha interativo, implementado do zero em **React puro com JavaScript**, com suporte para:

-   Dois jogadores (X e O);
-   Temporizador de 5 segundos por jogada, preenchendo automaticamente uma célula caso o jogador não responda;
-   Placar acumulativo, exibindo pontuação de X, O e empates;
-   Partidas até 11 pontos, definindo o vencedor da série;
-   Menu flutuante de personalização para alterar cores do jogo (X, O, tabuleiro, linhas, etc.) em tempo real;
-   Reinício de partidas a qualquer momento.

O jogo é completamente componentizado e utiliza **hooks customizados** para controle de estado, garantindo manutenibilidade, performance e flexibilidade.

[Demo Online](https://tic-tac-toe-plum-phi.vercel.app/)

---

## Estrutura de Pastas

src/
│
├─ components/
│ ├─ game-board/
│ ├─ score-board/
│ ├─ timer/
│ ├─ game-controls/
│ ├─ winner-card/
│ └─ table-results/
│
├─ constants/ # Constantes globais (cores, jogadores, tempo, etc.)
├─ hooks/ # Hooks customizados
├─ utils/ # Funções auxiliares do game
└─ App.js # Componente principal

---

## Justificativa das Decisões Técnicas

-   **React puro com JavaScript**: atende ao requisito de não utilizar TypeScript ou bibliotecas externas de estado.
-   **Hooks customizados**: `useGameController` centraliza toda a lógica do jogo.
-   **Componentização**: cada área do jogo é independente, garantindo manutenção e evolução fáceis.
-   **Styled Components**: permite manipulação dinâmica de cores em tempo real, além de estilos encapsulados e de fácil leitura.
-   **Estrutura leve e lógica clara**: funções curtas e bem definidas, facilitando a compreensão e evitando acoplamento desnecessário.

---

## Funcionalidades

-   Menu flutuante de cores, permitindo alterar o tema do jogo sem recarregar;
-   Animações suaves para indicação do vencedor e preenchimento do tabuleiro;
-   Reinício total ou próximo turno disponível a qualquer momento;
-   Rankings ao final da série, mostrando pontos de X, O e empates.

---

## Instruções para Build e Execução

1. **Instalar dependências**

```bash
npm install
# ou
yarn install
```

2. **Executar localmente**

```bash
npm run dev
# ou
yarn dev
```

# O jogo estará disponível em http://localhost:5173 (ou porta indicada pelo Vite).
