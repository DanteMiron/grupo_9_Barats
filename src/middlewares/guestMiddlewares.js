function guestMiddlewares(req,res,next){
if(req.session.userLogged){
    return res.redirect('/users/'+ req.session.userLogged.id)
}
next();
}

module.exports = guestMiddlewares;