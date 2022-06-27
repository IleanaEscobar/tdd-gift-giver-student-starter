
const express = require('express');
const GiftExchangeModel = require('../models/gift-exchange')
// const app = express();
// CustomElementRegistry PORT = 3001;

// Single routing
const router = express.Router();

router.post('/pairs', function (req, res, next) {
    const names = req.body.names;

    console.log("Router Working: " + names);
    const arr = GiftExchangeModel.pairs(names)
    res.status(200).send(arr);
})

router.post('/traditional', function (req, res, next) {
    const names = req.body.names;

    console.log("Router Working: " + names);
    const arr = GiftExchangeModel.traditional(names)
    res.status(200).send(arr);
})

module.exports = router
// app.use(router);

// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });
