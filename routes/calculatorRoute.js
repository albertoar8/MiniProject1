var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
    console.log(req.query);
    res.status(200);
    res.send({
        "result": parseFloat(req.query.num1) + parseFloat(req.query.num2)
    });
})

//module is the entire javascript code so we can import it on server.js line 5-6
//where we require() this piece of code. 
module.exports = router;