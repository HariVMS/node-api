const ProductService = require("../service/productService");

class ProductController{
    static async createProductService(req,res){
        try{
            const newProduct=await ProductService.createProduct(req.body);
            res.status(200).json(newProduct);
        }catch(err){
            res.status(400).json({"message":err.message});
        }
    }

    static async getProductService(req,res){
        try{
            console.log("1111111111111111111")
            console.log(req.params.id)
            const productData=await ProductService.getProduct(req.params.id);
            console.log(productData)
            res.json(productData);
        }catch (err) {
            res.status(404).json({ message: err.message });
          }
    }

    static async getAllProductsService(req,res){
        try{
            const allProducts = await ProductService.getAllProduct();
            res.json(allProducts); 
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }

    static async updateProductService(req ,res){
        try{
            const updateProducts = await ProductService.updateProduct(req,req);
            res.json(updateProducts);
        }
        catch (err) {
            console.log('dfsd')
            res.status(400).json({ message: err.message });
          }
    }

    static async deleteProductsService(req,res){
        try {
            const deleteProduct = await ProductService.deleteProducts(req.params.id);
            res.json(deleteProduct);
        }catch(err){
            res.status(500).json({ message: err.message });
        }
    }
}


module.exports = ProductController;
