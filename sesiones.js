const express = require("express");
const session = require('express-session');
const app = express();

app.use(session({secret: 'contador'}));

app.use(express.static(__dirname + "/public"));

app.use( express.json() );

app.use( express.urlencoded({ extended: true }) );

app.set('views', __dirname + '/vistas'); 
app.set('view engine', 'ejs');

app.get('/contador', function (req, res){
    if(req.session.count == undefined) {
        req.session.count = 0;
    }
        req.session.count += 1;
    
    res.render("contador", {count: req.session.count})
})

app.listen(8000, function() {
    console.log("Escuchando el puerto 8000");
})