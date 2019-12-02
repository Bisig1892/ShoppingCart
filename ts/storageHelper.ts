class ProductStorage {
    // Add Product
    static addProduct(p:Product):void {
        let prods = this.getAllProducts();
        prods.push(p);

        let data = JSON.stringify(prods);
        localStorage.setItem('prods', data);
    }    
    
    /**
     * Retrieve all Products, or creats new product array
     */
    static getAllProducts():Product[] {
        let data = localStorage.getItem('prods');
        if(data == null) {
            return new Array<Product>();
        }
        return <Product[]>JSON.parse(data);
    }
    // Get number of Products
    static getNumberOfProducts() {
        let prods = this.getAllProducts();
        return prods.length;
    }
}