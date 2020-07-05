const express = require("express");
const router = express.Router();
const products = require('../utils/mocks/products');

// const products = [
//   {
//     name: "Red shoes",
//     price: 75,
//     image: "public/images/hero-bg.jpg"
//   },
//   {
//     name: "Black bike",
//     price: 300,
//     image: "public/images/hero-bg.jpg"
//   }
// ];

router.get("/", function(req, res) {
  res.render("products", { products });
});



module.exports = router;