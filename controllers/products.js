const rootDir = require('../util/path')
const path = require('path');
const Product = require('../service/product');

exports.getIndex = (req, res, next) => {
    Product.fetchProducts().then(([data, fieldData]) =>{
        res.send(data);
    }).catch(
        err => console.log(err)
    );
}