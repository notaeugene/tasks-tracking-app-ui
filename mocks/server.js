const express = require('express');
const cors = require('cors');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const routes = require('./routes');

const adapter = new FileSync('db.json');
const db = low(adapter);

const app = express();

const PORT = 8000;

app.use(cors());
app.use(routes(db));

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
