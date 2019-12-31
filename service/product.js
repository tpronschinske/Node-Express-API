const db = require('../util/database');

module.exports = class Product {
    constructor(id, name, price, qty){
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    static fetchProducts(){
        return db.execute('SELECT * FROM products')
    }

    static fetchProductById(id){

    }

    static deleteProduct(id){

    }
}