const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret'));



app.get('/greet', (req,res) => {
    console.log(req.cookies)
    const { name = 'No-name' } = req.cookies
    res.send(`hey there, ${name}`)
})


app.get('/setname', (req,res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'pandas')
    res.send('ok send you a cookie')
})

app.get('/getsignedcookie', (req,res) => {
    res.cookie('fruit', 'grape', { signed: true})
    res.send('send cookie')
})

app.get('/verifyfruit', (req,res)=> {
    console.log(req.cookies)
    res.send(req.cookies)
})
app.listen(5000, () => {
    console.log('serving')
})






