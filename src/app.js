const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
const homeRoutes = require ('./routes/homeRoutes');
const userRoutes = require ('./routes/userRoutes');
const productosRoutes = require ('./routes/productosRoutes');


app.use(express.static(publicPath));

app.listen(3000, () => console.log("Servidor Funcionando"));

app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/', userRoutes);
app.use('/',productosRoutes)