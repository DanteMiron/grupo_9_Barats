const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
const homeRoutes = require ('./routes/homeRoutes');
const userRoutes = require ('./routes/userRoutes');
const productRoutes = require ('./routes/productRoutes');
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddlewares');
const cookies = require('cookie-parser');

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(publicPath));
app.use(cookies());
app.use(session({
    secret: 'mensaje secreto',
    resave: false,
    saveUninitialized: false,
}
));

app.use(userLoggedMiddleware);




app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => console.log("Servidor Funcionando"));

app.use((req,res,next )=>{
res.status(404).send("Not-Found");
next();
} )