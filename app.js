const express =  require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/r', (req,res)=>{
    res.render('indexRiya.ejs')
})

app.get('/:name/', (req, res) => {
    const { name }= req.params; 
    const fname = name.trim().split("-").join(" ").toUpperCase()
    res.render('invite.ejs', {usrName : fname})
});

app.get('/r/:name/', (req, res) => {
    const { name }= req.params; 
    const fname = name.trim().split("-").join(" ").toUpperCase()
    res.render('inviteRiya.ejs', {usrName : fname})
});

app.get(/(.*)/,(req,res)=>{
    res.send("you landed a wrong page")
})

app.listen(PORT, ()=>{
    console.log(`app is running on ${PORT}`);
})