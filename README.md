# *Tweteroo*
## **Visão Geral**
**Tweteroo** é um servidor que gerencia usuários e tweets, com endpoints para criar usuários, criar tweets associados a usuários existentes e obter os últimos tweets com informações dos autores.

## **Principais Funcionalidades**
- Criação de usuário;
- Criação de Tweets;
- Listagem dos últimos 10 tweets;
- Verificação de usuário já está cadastrado;
- Retorno de informações do usuário com **username** fornecido.

## **Rotas Utilizadas por Entidades** 
1. Rota de Cadastro de Usuário (**POST** `/sign-up`)
2. Rota de Criação de Tweets (**POST** ` /tweets`)
3. Rora de Obtenção dos Últimos 10 Tweets (**GET** `/tweets`) 

## **Tecnologias Utilizadas**
- JavaScript;
- NodeJS;
- Axios;
- Cors;
- Express;
- Nodemon.

## Como Executar o Projeto Localmente

### No Terminal 
1. **Clone o Repositório:** `git clone` https://github.com/fl3via/projeto12-tweteroo
2. **Entre na pasta:** `cd` projeto12-tweteroo
3. **Abra no Visual Estudio Code:** `code .`

### No Visual Estudio Code
4. **Instale as Dependências:** `npm install`
5. **Inicie o Servidor:** `npm start`
6. **Execute o Projeto:** `npm run dev` 
  
