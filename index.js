const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'Hey Im Todd, this recipe sucks'
    },
    {
        username: 'Pentol',
        comment: 'I am Cuter than you'
    },
    {
        username: 'Shatovic',
        comment: 'That is so funny'
    },
    {
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