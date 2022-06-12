const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
const homeRoutes = require ('./routes/homeRoutes');
const userRoutes = require ('./routes/userRoutes');
const productRoutes = require ('./routes/productRoutes');
const methodOverride = require('method-override');

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(publicPath));

app.listen(3000, () => console.log("Servidor Funcionando"));

app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.use((req,res,next )=>{
res.status(404).send("Not-Found");
next();
} )