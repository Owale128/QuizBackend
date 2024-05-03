const express = require('express');
const app = express();
const api = require('./routes');

app.use('/routes', api);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servern körs på port ${PORT}`));