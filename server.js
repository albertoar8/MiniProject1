const express = require('express');
const app= express();
const port=3000;

const testRoute = require('./routes/testRoutes.js')
const calculatorRoute = require('./routes/calculatorRoute.js')

app.use('/',express.static('public'));
app.use('/',testRoute);
app.use('/calculator',calculatorRoute);
// app.get('/test',(req, res)=>{
//     res.send('Hello World!');
// })
app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`);
})