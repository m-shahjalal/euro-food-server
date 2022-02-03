require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const products = require('./routes/product');

const PORT = process.env.PORT || 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', products);

const URL = `mongodb+srv://${username}:${password}@cluster0.1gsip.mongodb.net/bazar?retryWrites=true&w=majority`;

mongoose
	.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log('Server Running On Port ' + PORT));
	})
	.catch((err) => {
		console.log('error occurred', err.message);
	});
