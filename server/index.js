const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(express.static('dist'))
  .use(bodyParser.json());

app.post('/email', (req, res) => {
  console.log(req.body)
});

app.listen(port, () => console.log(`Listening on port ${port}!`));