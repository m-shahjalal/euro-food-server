const Product = require('../model/Product');

const products = {};

products.getAllProducts = async (req, res, next) => {
	const category = req.query.category || false;
	try {
		let products;
		if (category) {
			products = await Product.find({ category });
		} else {
			products = await Product.find({});
		}
		res.status(200).json(products);
	} catch (error) {
		next(error.message);
	}
};

module.exports = products;
