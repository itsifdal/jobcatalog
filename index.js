require('dotenv').config()

const express = require('express')
const app     = express()
const port    = 8000

const bodyParser    = require("body-parser");

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

require("./app/routes/auth.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/job.route")(app);