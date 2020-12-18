const { render } = require('ejs');
const express = require('express');;
const app = express ();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

uuid();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'todd',
        comment: 'something random'
    },
    {
        id: uuid(),
        username: 'jacob',
        comment: 'you cant do that'
    }
]


app.get('/', (req,res) => {
    res.send('root directory go to /comments')
})

app.get('/comments', (req,res)  => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

app.post('/comments', (req,res) => {
    const { username, comment } = req.body;
    comments.push({username, comment, id: uuid() })
    //console.log(req.body);
    res.redirect('/comments');
})

app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id );
    res.render('comments/show', {comment})

    //res.render('comments/show',  {comment})
})

app.get('/comments/:id/edit', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id );
    res.render('comments/edit', { comment })

})

app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id );
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req,res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
    
    //const foundComment = comments.find(c => c.id === id );

})


app.get('/tacos', (req,res) => {
    res.send('get /tacos response')
})

app.post('/tacos', (req,res) => {
    const {meat, qty} = req.body;
    res.send(`there are ${qty} of ${meat}`);
    console.log(res.body);
})


app.listen(3000, () => {
    console.log('getting 3000 as response')
})

