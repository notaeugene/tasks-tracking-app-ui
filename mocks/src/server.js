const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  setTimeout(next, Math.floor(Math.random() * 2000 + 100));
});
app.use('/', routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
