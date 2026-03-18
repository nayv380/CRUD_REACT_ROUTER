# 📦 Sistema de Gestão de Estoque Profissional

> Projeto desenvolvido como atividade acadêmica para o **IFMG**, focado em conceitos avançados de Front-end, Gerenciamento de Estado Global e Persistência de Dados.

---

## 🚀 Sobre o Projeto
Este sistema permite o controle completo de um inventário, possibilitando o cadastro, edição, visualização e exclusão de itens (CRUD). O diferencial técnico reside na utilização da **Arquitetura Flux** para garantir a previsibilidade do estado da aplicação.

### 🛠️ Tecnologias Utilizadas
* **React 18** (Vite como Build Tool)
* **Redux Toolkit** (Gerenciamento de Estado Global)
* **React Router DOM** (Navegação SPA)
* **CSS Modules** (Estilização isolada e escopada)
* **LocalStorage API** (Persistência de dados no navegador)

---

## 📋 Funcionalidades
- [x] **Cadastro Completo:** Nome, Valor, Quantidade (Obrigatórios) e Categorias dinâmicas.
- [x] **Gestão de Estoque:** Listagem centralizada com identificação por código único (PRD-XXXX).
- [x] **Edição Inline:** Alteração de preços diretamente no card, sem pop-ups externos.
- [x] **Exclusão Segura:** Sistema de confirmação visual "SIM/NÃO" integrado à interface.
- [x] **Feedback ao Usuário:** Notificações (Toasts) para todas as ações de sucesso.

---

## 🧠 Dificuldades e Aprendizados
Durante o desenvolvimento, os principais desafios foram:
1.  **Sincronização do LocalStorage:** Garantir que o Redux e o armazenamento local estivessem sempre em harmonia após cada atualização de estado.
2.  **User Experience (UX):** Substituir alertas nativos do navegador por componentes de interface personalizados (Toasts e Modais de Confirmação), mantendo o "esquadro" e a simetria visual.
3.  **Arquitetura de Componentes:** Organizar a lógica de edição inline de forma que não impactasse o desempenho da renderização da lista.

---

## 🔧 Como Executar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/) (Versão 16 ou superior)
* [Git](https://git-scm.com/)

### 2. Entre no Vercel
* [Clique aqui]([https://crud-react-router-sepia.vercel.app/cadastro](https://crud-react-router-mll5tdwsk-nayv380s-projects.vercel.app/)) 

### 1. Clonando o Repositório
```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)


