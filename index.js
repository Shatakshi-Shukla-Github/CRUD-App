const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'Hey Im Todd, this recipe sucks'
    },
    {
        id: 2,
        username: 'Pentol',
        comment: 'I am Cuter than you'
    },
    {
        id: 3,
        username: 'Shatovic',
        comment: 'That is so funny'
    },
    {
        id: 4,
        username: 'TammyThunderBalls',
        comment: 'My name sounds like a german verse to slay a dragon'
    }
]
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment });
    res.redirect('/comments');
})
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/show', { comment });
})
// app.get('/tacos', (req, res) => {
//     res.send("GET /tacos response");
// })
// app.post('/tacos', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`Here are ${qty} ${meat} Tacos!`)
// })
app.listen(3000, (req, res) => {
    console.log("Listening On Port 3000")
})