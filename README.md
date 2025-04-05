# Calculadora de IMC

Uma calculadora de IMC simples feita com **React**, **Vite**, **Material UI**, e suporte a **PWA**. Permite calcular seu índice de massa corporal de forma rápida, com interface intuitiva e responsiva. O app pode ser instalado no celular ou desktop como um aplicativo nativo.

---

## Tecnologias utilizadas

- React 19
- Vite
- MUI (Material UI)
- vite-plugin-pwa
- Progressive Web App (PWA)
- LocalStorage (para salvar o último cálculo)
- TypeScript

---

## Funcionalidades

- Entrada de **peso (kg)** e **altura (m)**.
- Validação de campos: somente números válidos e maiores que zero.
- Exibição do resultado do **IMC** com a **classificação** correspondente.
- **Armazena o último cálculo** no `localStorage`.
- Instalação como **aplicativo PWA** em dispositivos compatíveis.

---

## Como funciona?

- O usuário informa seu peso e altura.
- O IMC é calculado com a fórmula:
