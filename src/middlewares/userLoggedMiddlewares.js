const actions = require('../database/actions');
const path = '\\JSON\\users.json';
const db = require("../../database/models");


function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;
    db.Usuario.findAll()
    .then(function(users){
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = users.find ( user => user.email === emailInCookie);
    
   
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next ();
})
}

module.exports = userLoggedMiddleware;