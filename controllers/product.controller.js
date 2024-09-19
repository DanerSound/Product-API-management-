const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product); // Invia la risposta qui
        console.log(req.body); // Puoi ancora fare il log, ma non inviare una risposta
    } catch (error) {
        res.status(500).json({message: error}); // Invia una risposta in caso di errore
        console.log(error);
    }
}

const updateProduct  = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404).json({message: 'Product not found!'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: " error in update!"});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({message: ' the product does not exist!'})
        }
        res.status(200).json({message: 'product deleted successfully'})
    } catch (error) {
        res.status(500).json({message: "error in delete"});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};