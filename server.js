const express = require('express');
const api = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())
app.use(cors())


app.use('/routes', api);


app.listen(PORT, () => console.log(`Servern körs på port ${PORT}`));