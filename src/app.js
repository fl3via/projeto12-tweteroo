import express from 'express'

const app = express();
app.use(express.json());

//  armazenar os usuários cadastrados
const usuarios = [
    {
        username: "bobesponja",
            avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
    }
];

// armazenar os tweets
const tweets = [{
    username: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}];

// Rota para /sign-up
app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  // Verifica se o usuário já está cadastrado
  if (usuarioJaCadastrado(username)) {
    return res.status(400).send('Usuário já cadastrado');
  }

  // Cadastra o usuário
  usuarios.push({ username, avatar });

  return res.send('OK');
});

// Rota para  /tweets
app.post('/tweets', (req, res) => {
  const { username, tweet } = req.body;

  // Verifica se o usuário está cadastrado
  if (!usuarioJaCadastrado(username)) {
    return res.status(401).send('NÃO AUTORIZADO');
  }

  // Salva o tweet no array
  tweets.push({ username, tweet });

  return res.send('OK');
});

// Rota para /tweets (GET)
app.get('/tweets', (req, res) => {
  const ultimosDezTweets = tweets.slice(-10).map(tweet => {
    const { username, tweet: textoTweet } = tweet;
    const usuario = obterUsuario(username);
    const { avatar } = usuario;
    return { username, avatar, tweet: textoTweet };
  });

  return res.json(ultimosDezTweets);
});

//  verificar se o usuário está cadastrado
function usuarioJaCadastrado(username) {
  return usuarios.find(usuario => usuario.username === username) !== undefined;
}

//  obter o usuário
function obterUsuario(username) {
  return usuarios.find(usuario => usuario.username === username);
}

// Inicia o servidor
app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
}); 
