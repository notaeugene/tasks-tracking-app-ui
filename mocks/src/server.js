const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const PORT = 8000;

app.use(cors());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
