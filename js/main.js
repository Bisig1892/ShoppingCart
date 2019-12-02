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
    var currBuyBtn = this;
    var currProdDiv = currBuyBtn.parentElement;
    var prod = new Product();
    prod.title = currProdDiv.querySelector('div.title').innerHTML;
    // console.log(currProdDiv.querySelector("div.title"));
    var price = currProdDiv.querySelector('div.price').innerHTML;
    price = price.replace('$', '');
    prod.price = parseFloat(price);
    prod.description = currProdDiv.querySelector('div.description').innerHTML;
}
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
