import express from 'express';

const app = express();
app.use(express.json());

const usuarios = [
  {
    username: 'bobesponja',
    avatar: 'https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png'
  }
];

const tweets = [
  {
    username: 'bobesponja',
    avatar: 'https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png',
    tweet: 'Eu amo hambúrguer de siri!'
  }
];

app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  if (usuarioJaCadastrado(username)) {
    return res.status(400).send('Usuário já cadastrado');
  }

  usuarios.push({ username, avatar });

  return res.send('OK');
});

app.post('/tweets', (req, res) => {
  const { username, tweet } = req.body;

  if (!usuarioJaCadastrado(username)) {
    return res.status(401).send('NÃO AUTORIZADO');
  }

  tweets.push({ username, tweet });

  return res.send('OK');
});

app.get('/tweets', (req, res) => {
  if (tweets.length === 0) {
    return res.json([]);
  }

  const ultimosDezTweets = tweets.slice(-10).map(tweet => {
    const { username, tweet: textoTweet } = tweet;
    const usuario = obterUsuario(username);
    const { avatar } = usuario;
    return { username, avatar, tweet: textoTweet };
  });

  return res.json(ultimosDezTweets);
});

function usuarioJaCadastrado(username) {
  return usuarios.find(usuario => usuario.username === username) !== undefined;
}

function obterUsuario(username) {
  return usuarios.find(usuario => usuario.username === username);
}

app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
