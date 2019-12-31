const http = require('http');
const express = require('express');
const bp = require('body-parser');
const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');

app.use(bp.urlencoded({extended: false}));
// used to serve static files
app.use(express.static(path.join(__dirname, 'public')))

// provides route filter prefix for first set then all routes in second come from routes files
app.use('/admin', adminRoutes);

// use routes with no filter prefix
//app.use(shopRoutes);

app.get('/', (req, res, next) => {
    //res.send('<h2>Home</h2>');
    // dirname is the directory, folder, filename
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found');
});







const server = http.createServer(app);
server.listen(3000)
