const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', controllers.index);
app.post('/api/movement-instructions', controllers.movement.move)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});