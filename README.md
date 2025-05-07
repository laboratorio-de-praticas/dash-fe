# 📊 Dash e Reports – Sistema de Votação (Front-End)

Este repositório contém o desenvolvimento do **Front-End** do **Sistema de Votação para Representantes de Turma e Projetos Acadêmicos** da Fatec-SP.  
A interface é focada em **visualização de resultados em tempo real**, com ênfase em **auditabilidade, acessibilidade** e **interpretação visual dos dados**.

---

## 🧩 Arquitetura

O front-end se comunica com o back-end por meio de uma **API REST**, utilizando **Axios** para requisições HTTP e **SSE (Server-Sent Events)** para atualização em tempo real dos dados de votação.

![image](https://github.com/user-attachments/assets/1d1994e3-193d-452f-9370-e42d401caa03)


---

## ⚙️ Componentes e Tecnologias

O projeto utiliza as seguintes tecnologias principais:

- **Next.js**: Framework baseado em React para criação da interface com renderização híbrida e rotas otimizadas.
- **React.js**: Biblioteca base para construção da UI antes da refatoração para Next.
- **Axios**: Utilizado para comunicação com a API do back-end.
- **CORS**: Gerenciado para permitir a integração entre front-end e back-end hospedados em ambientes diferentes.

---

## 🖼️ Exemplo Visual

![Image](https://github.com/user-attachments/assets/c87c7359-fca6-486b-9b3b-92e6dbd3c30d)

---

## 🧪 Tecnologias Utilizadas

- **Next.js**
- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Axios**
- **CORS**

---

## ✅ Pré-requisitos

Para rodar o projeto localmente, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- npm (gerenciador de pacotes padrão do Node.js)

---

## 🚀 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório do projeto
cd dash-fe

# Instale as dependências
npm install

# Execute o projeto em ambiente de desenvolvimento
npm run dev
