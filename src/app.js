import express from 'express';

const app = express();
app.use(express.json());

const usuarios = []

const tweets = []

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

  const ultimosDezTweets = tweets.map((tweet) => {
    const user = usuarios.find((t) => t.username === tweet.username)
    return { ...tweet, avatar: user.avatar}
  })
  res.send(ultimosDezTweets.slice(-10))
})

function usuarioJaCadastrado(username) {
  return usuarios.find(usuario => usuario.username === username) !== undefined;
}

function obterUsuario(username) {
  return usuarios.find(usuario => usuario.username === username);
}

app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
