const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const giftExchange = require('./routes/gift-exchange')
const Errors = require('./utils/errors')

app.use(bodyParser.json());
app.use(morgan('tiny'))

// Mount the router to the Express application at the /gift-exchange endpoint.
app.use('/gift-exchange', giftExchange)

app.get('/', (req, res) => {
  res.status(200).send({ "ping": "pong" })
})

app.use((error, next) => {
    next(new NotFoundError)
})

app.use((error, req, res, next) => {
    let status = 0
    let message = ''
    (error.status > 0)? (status = error.status) : (status = 500)
    (error.message.length > 0)? (message = error.message) : (message = "Something wen't wrong in the application")
    res.send({
    error: {
        status: status,
        message: message
    }
    })

})
module.exports = app;
