const Product = require('../models/product');

class productService {

    static async createProduct(productData){
        try{
            const newProduct = await Product.create(productData)
            return newProduct;
        }catch(err){
            throw new Error(err.message);
        }
    }

    static async getProduct(id){
        try{
            const product = await Product.findByPk(id);
            console.log("sdfasd");
            console.log(product)

            if(!product)throw new Error("Product not found ");
            return product
        }catch(err){
            throw new Error(err.message);
        }
    }

    static async getAllProduct(){
        try{
            const allProducts = await Product.findAll();
            return allProducts;
        }catch(err){
            throw new Error(err.message);
        }
    }

static async updateProduct(req, res) {
    try {
        console.log(req.params.id);  // Log the id from the URL parameter
        console.log(req.body);       // Log the updated data from the request body

        // Update the product by id
        const [updated] = await Product.update(req.body, {
            where: { id: req.params.id }, // Correctly specify the ID in the where clause
            returning: true  // This ensures the updated row is returned
        });

        if (updated === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Return the updated product
        const updatedProduct = await Product.findByPk(req.params.id);
        return updatedProduct
    } catch (err) {
        console.error("Update Error: ", err.message);
        res.status(400).json({ message: err.message });
    }
}


    static async deleteProducts(id){
        try{
            const deleteProduct = await Product.destroy({
                where:{'id':id}
            });
            if(deleteProduct === 0)throw new Error("Product Not Found");
            return{ message: "Item deleted successfully" };
        }catch(err){
            throw new Error(err.message);
        }
    }

}


module.exports = productService;