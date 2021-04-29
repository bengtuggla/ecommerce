const mongodb = require('mongoose');
const productSchema = require('./productSchema');
const Product = require('./productSchema');

/* exports.getProducts = (req, res)=>{
 Product.find({}), (err.data)
} */

exports.getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: err.message || 'Something went wrong fetching Products',
    });
  }
};

//Här måste jag lägga till errorfunktion om produkt inte finns
exports.getOneProduct = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Something went wrong fetching Product',
    });
  }
};

exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Product deleted Successfully',
      });
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to delete Product',
      });
    });
};

exports.createProducts = (req, res) => {
  const product = new Product({
    name: req.body.name,
    short: req.body.short,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Product created Successfully',
      });
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create Product',
      });
    });
};
