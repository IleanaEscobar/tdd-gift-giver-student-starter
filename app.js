const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const giftExchange = require('./routes/gift-exchange')

app.use(bodyParser.json());
app.use(morgan('tiny'))

// Mount the router to the Express application at the /gift-exchange endpoint.
app.use('/gift-exchange', giftExchange)

app.get('/', (req, res) => {
  res.status(200).send({ "ping": "pong" })
})

module.exports = app;
