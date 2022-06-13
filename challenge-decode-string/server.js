const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

const SERVER_PORT = 5050
app.listen(5050, () => console.log(`server jamming on ${SERVER_PORT}`))