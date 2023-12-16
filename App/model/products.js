// ใช้งาน mongoose
const mongoose = require('mongoose');


// connect to Mongog Database

const dbUrl = 'mongodb://127.0.0.1:27017/productDB';
mongoose.connect(dbUrl,{

}).catch(err => console.error(err));  

let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
})

// Create Model
let Product = mongoose.model('products', productSchema)

// Export Model

module.exports = Product

// ออกแบบฟังก์ชั่น บันทึกข้อมูล

module.exports.saveProduct = function(model,data){
    model.save(data)
}