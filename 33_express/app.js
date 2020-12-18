const express = require('express');
const app = express()
console.dir(app);


// app.use((req, res) => {
//     console.log('the req is '+ req);
//     res.send('<h1>h1 heading</h1>');
// });

app.get('/', (req, res) => {
    
    res.send('<h1>home page</h1>');

});

app.post('/cats', (req,res) => {
    res.send('post request to /cat');
});

app.get('/cats', (req, res) => {
    console.log('cat');
    res.send('meow');

});

app.get('/r/:subreddit/:postID', (req, res) => {
    console.log(req.params);
    const {subreddit, postID } = req.params;
    res.send(`this is the ${subreddit} subreddit with post id: ${postID}`);
});

app.get('/search', (req,res) => {
    const { q } = req.query;
    if (!q){
        res.send('<h1> nothing found if nothing searched</h1>');
    }
    res.send(`<h1> search results for: ${q} and a little something here</h1>`)
})


app.get('*', (req, res) => {
    
    res.send('redirect page nothing here');

});


app.listen(3000, () =>{
    console.log('test');
});