const express = require("express");
const router = express.Router();
const path = require("path");
// เรียกใช้งาน Model
const Product = require("./model/products");

router.get("/", (req, res) => {
  const products = [
    {
      name: "shirt",
      price: 100,
      img: "imag/img1.jpg",
    },
    {
      name: "shoes",
      price: 999,
      img: "imag/img1.jpg",
    },
  ];
  res.render("index.ejs", { products: products });
});

router.get("/addForm", (req, res) => {
  res.render("form");
});

router.get("/manage", (req, res) => {
  res.render("manage");
});

router.post("/insert", (req, res) => {
  let data = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  console.log(data);
  Product.saveProduct(data, (err) => {
    if (err) console.log(err);
    res.redirect('/');
  })
});

// example router.get
// router.get("/", function (req, res) {
//     res.status(200);
//     res.type('text/html');
//     res.sendFile(path.join(__dirname,"templates/index.html"));
// });

// router.get("/product/:id", function (req, res) {

//     const productID = req.params.id;

//     if (productID == 1){
//         res.status(200);
//         res.type('text/html');
//         res.sendFile(path.join(__dirname,"templates/product1.html"));

//     }
//     else if (productID == 2){
//         res.status(200);
//         res.type('text/html');
//         res.sendFile(path.join(__dirname,"templates/product2.html"));

//     }
//     else if (productID == 3){
//         res.status(200);
//         res.type('text/html');
//         res.sendFile(path.join(__dirname,"templates/product3.html"));

//     }
//     else{
//         res.redirect('/');
//     }

// });

module.exports = router;
