# Angular 90-is

Este é um projeto Angular desenvolvido com **Angular 20** que demonstra conceitos fundamentais e avançados do framework. O projeto inclui a criação de componentes pai e filho, uso de **signals**, diretivas, pipes, chamadas HTTP, roteamento e muito mais.

---

## Funcionalidades do Projeto

### 1. **Criação de Componentes Pai e Filho**

- O projeto utiliza uma estrutura de componentes pai e filho para organizar a aplicação.
- Comunicação entre os componentes é feita utilizando **@Input** e **@Output**.

### 2. **Uso de Signals**

- Signals são utilizados para gerenciar o estado reativo da aplicação.
- Exemplos incluem o gerenciamento de contadores e a atualização de dados em tempo real.

### 3. **Uso de `@if`**

- A diretiva `@if` é utilizada para renderizar condicionalmente elementos no template, substituindo o uso tradicional de `*ngIf`.

### 4. **Chamadas HTTP**

- O projeto realiza chamadas HTTP para o endpoint público [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) para obter uma lista de tarefas (todos).
- As chamadas HTTP são feitas utilizando o **HttpClient** do Angular.

### 5. **Services**

- Serviços são utilizados para centralizar a lógica de negócios e realizar chamadas HTTP.
- Um serviço específico é responsável por buscar e gerenciar os dados dos "todos".

### 6. **Diretivas**

- Uma diretiva personalizada foi criada para destacar (`highlight-completed-todo`) os itens da lista de "todos".

### 7. **Pipe para Filtrar os Todos**

- Um pipe personalizado foi implementado para filtrar os "todos" com base em critérios definidos pelo usuário.

### 8. **Roteamento**

- O projeto utiliza o sistema de roteamento do Angular para navegar entre diferentes páginas:
  - **Todo Page**: Exibe a lista de tarefas (todos) obtidas da API.
  - **Counter Page**: Uma página simples com um contador reativo.

---

## Como Executar o Projeto

### 1. Pré-requisitos

- Node.js (versão 18 ou superior)
- Angular CLI (versão 20 ou superior)

### 2. Instalar Dependências

- Execute o comando abaixo para instalar as dependências do projeto:

### 3. Executar o Servidor de Desenvolvimento

- Inicie o servidor de desenvolvimento com o comando:

- Acesse o projeto no navegador em: http://localhost:4200

## Tecnologias Utilizadas

- Angular 20
- Signals
- HttpClient
- Roteamento
- Diretivas Personalizadas
- Pipes Personalizados

## Tutorial

- https://www.youtube.com/watch?v=oUmVFHlwZsI

## Extensões

- Angular DevTools

---

## Estrutura do Projeto

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── todo/
│   │   │   ├── todo.component.ts
│   │   │   ├── todo.component.html
│   │   │   └── todo.component.css
│   │   ├── counter/
│   │   │   ├── counter.component.ts
│   │   │   ├── counter.component.html
│   │   │   └── counter.component.css
│   ├── services/
│   │   └── todo.service.ts
│   ├── directives/
│   │   └── highlight.directive.ts
│   ├── pipes/
│   │   └── filter-todo.pipe.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts

```
