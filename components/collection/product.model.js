<<<<<<< Updated upstream


const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
=======
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     product_name: String,
//     price: Number,
//     image: String,
//     status: String,
//     category: String,
//     manufacturer: String,
//     creation_time: Date
// }, {collection: 'product'});

// module.exports = mongoose.model('product', productSchema, 'product');

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
>>>>>>> Stashed changes
    product_name: String,
    price: Number,
    product_img: String,
    status: String,
    category: String,
    manufacturer: String,
<<<<<<< Updated upstream
    creation_time: Date
}, {collection: 'product'})

const reviewSchema = new mongoose.Schema({
    product_id: String,
    name: String,
    rating: Number,
    content: String
}, {collection: 'reviews'})

const Product = mongoose.model('product', productSchema, 'product')
const Review = mongoose.model('reviews', reviewSchema, 'reviews')

module.exports = {Product, Review}
=======
    creation_time: Date,
  },
  { collection: "product" }
);

const reviewSchema = new mongoose.Schema(
  {
    product_id: String,
    name: String,
    rating: Number,
    content: String,
  },
  { collection: "reviews" }
);

const Product = mongoose.model("product", productSchema, "product");
const Review = mongoose.model("reviews", reviewSchema, "reviews");

module.exports = { Product, Review };
>>>>>>> Stashed changes