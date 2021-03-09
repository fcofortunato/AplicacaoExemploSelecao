const express = require('express');

const app = express();

app.use(express.static('./dist/gerenciador-de-tarefas'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/gerenciador-de-tarefas' });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
