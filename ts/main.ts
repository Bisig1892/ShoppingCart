window.onload = function() {
    initBuyButtons();
}

/**
 * Wire up all the "Buy" buttons
 */
function initBuyButtons() {
    let buyBtns = document.querySelectorAll('div.buy');
    for (let i = 0; i < buyBtns.length; i++) {
        let currBtn = <HTMLElement>buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}

function buyProduct() {
    let prod = getProduct();
    saveProductToCart(prod);
}
/**
 * Get Product object currently selected by user
 */
function getProduct() {
    let currBuyBtn = <HTMLElement>this;
    let currProdDiv = currBuyBtn.parentElement;
    let prod = new Product();
    prod.title = currProdDiv.querySelector('div.title').innerHTML;
    let price = currProdDiv.querySelector('div.price').innerHTML;
    price = price.replace('$', '');
    prod.price = parseFloat(price);
    prod.description = currProdDiv.querySelector('div.description').innerHTML;
    return prod;
}

function saveProductToCart(p:Product):Product[] {

}