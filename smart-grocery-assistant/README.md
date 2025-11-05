## Smart Grocery Assistant

O **Smart Grocery Assistant** é um projeto desenvolvido utilizando Angular 20, Vertex AI e um backend em Express. O objetivo do aplicativo é fornecer sugestões inteligentes de compras, otimizando a experiência do usuário.

### Tecnologias Utilizadas

- **Angular 20**: Framework para construção da interface do usuário, utilizando signals ao invés de RXJS.
- **Vertex AI**: Serviço de inteligência artificial para gerar sugestões de compras.
- **Express**: Framework backend para gerenciar as requisições HTTP.

### Funcionalidades

- **Sistema de Sugestões**: Utiliza o Vertex AI para fornecer recomendações personalizadas.
- **Atualização em Tempo Real**: Utiliza signals e computed para atualizar os dados dinamicamente.
- **Renderização Baseada em URL**: O sistema é renderizado novamente sempre que há mudanças na URL.

### Estrutura do Projeto

- **Home Component**: Contém os serviços principais, incluindo o AI Assistant Service.
- **Backend**: Implementado com Express para gerenciar as requisições HTTP.

### Observações

- O aplicativo não utiliza RXJS, mas sim signals para gerenciamento de estado.
- A cada requisição HTTP, o sistema é renderizado novamente, garantindo que os dados estejam sempre atualizados.

### Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor backend com `npm run server`.
4. Inicie o aplicativo Angular com `ng serve`.
5. Acesse o aplicativo em `http://localhost:4200`.

### Tutorial

- https://www.youtube.com/watch?v=OTlnvCpOp00&t=2139s
- https://github.com/AhsanAyaz/angular-ai-smart-groceries-tutorial/blob/main/TUTORIAL.md
