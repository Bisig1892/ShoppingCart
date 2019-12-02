window.onload = function () {
    initBuyButtons();
    displayNumberOfItems();
    var cartIcon = document.querySelector('#shopping-cart');
    cartIcon.onclick = showCartContents;
};
/**
 * Wire up all the "Buy" buttons
 */
function initBuyButtons() {
    var buyBtns = document.querySelectorAll('div.buy');
    for (var i = 0; i < buyBtns.length; i++) {
        var currBtn = buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    var currBtn = this; // The 'Buy' button that was clicked
    var prod = getProduct(currBtn);
    saveProductToCart(prod);
    displayNumberOfItems();
}
function displayNumberOfItems() {
    var numItems = ProductStorage.getNumberOfProducts();
    var cartSpan = document.querySelector('div#shopping-cart > span');
    cartSpan.innerHTML = numItems.toString();
}
/**
 * Get Product object currently selected by user
 */
function getProduct(currBuyBtn) {
    var currProdDiv = currBuyBtn.parentElement;
    var prod = new Product();
    prod.title = currProdDiv.querySelector('div.title').innerHTML;
    var price = currProdDiv.querySelector('div.price').innerHTML;
    price = price.replace('$', '');
    prod.price = parseFloat(price);
    prod.description = currProdDiv.querySelector('div.description').innerHTML;
    return prod;
}
function saveProductToCart(p) {
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}
function showCartContents() {
    var displayDiv = document.getElementById('display-cart');
    displayDiv.innerHTML = '';
    var allProds = ProductStorage.getAllProducts();
    for (var i = 0; i < allProds.length; i++) {
        var prod = allProds[i];
        var prodDiv = document.createElement('div');
        prodDiv.classList.add('display-product');
        var header = document.createElement('h2');
        header.innerHTML = prod.title + " - $" + prod.price;
        prodDiv.appendChild(header);
        var desc = document.createElement('p');
        desc.innerHTML = "" + prod.description;
        prodDiv.appendChild(desc);
        displayDiv.appendChild(prodDiv);
    }
}
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var ProductStorage = /** @class */ (function () {
    function ProductStorage() {
    }
    // Add Product
    ProductStorage.addProduct = function (p) {
        var prods = this.getAllProducts();
        prods.push(p);
        var data = JSON.stringify(prods);
        localStorage.setItem('prods', data);
    };
    /**
     * Retrieve all Products, or creats new product array
     */
    ProductStorage.getAllProducts = function () {
        var data = localStorage.getItem('prods');
        if (data == null) {
            return new Array();
        }
        return JSON.parse(data);
    };
    // Get number of Products
    ProductStorage.getNumberOfProducts = function () {
        var prods = this.getAllProducts();
        return prods.length;
    };
    return ProductStorage;
}());
