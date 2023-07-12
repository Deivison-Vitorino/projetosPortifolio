const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: false }));

const port = 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});