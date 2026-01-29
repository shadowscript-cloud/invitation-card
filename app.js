const express =  require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('index')
})

app.use(()=>{
    console.log("WE got a new request")
})


app.listen(PORT, ()=>{
    console.log(`app is running on ${PORT}`);
})