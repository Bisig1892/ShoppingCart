window.onload = function () {
    initBuyButtons();
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
    var prod = getProduct();
    saveProductToCart(prod);
}
/**
 * Get Product object currently selected by user
 */
function getProduct() {
    var currBuyBtn = this;
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
}
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
