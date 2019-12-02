window.onload = function() {
    initBuyButtons();
    displayNumberOfItems();

    let cartIcon = <HTMLElement>document.querySelector('#shopping-cart');
    cartIcon.onclick = showCartContents;
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
    let currBtn = this; // The 'Buy' button that was clicked
    let prod = getProduct(currBtn);
    saveProductToCart(prod);

    displayNumberOfItems();
}

function displayNumberOfItems() {
    let numItems = ProductStorage.getNumberOfProducts();
    let cartSpan = document.querySelector('div#shopping-cart > span');
    cartSpan.innerHTML = numItems.toString();
}

/**
 * Get Product object currently selected by user
 */
function getProduct(currBuyBtn:HTMLElement) {
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
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}

function showCartContents() {
    let displayDiv = document.getElementById('display-cart');
    displayDiv.innerHTML = '';
    let allProds = ProductStorage.getAllProducts();
    for (let i = 0; i < allProds.length; i++) {
        let prod = allProds[i];
        let prodDiv = document.createElement('div');
        prodDiv.classList.add('display-product');
        let header = document.createElement('h2');
        header.innerHTML = `${prod.title} - $${prod.price}`;
        prodDiv.appendChild(header);
        let desc = document.createElement('p');
        desc.innerHTML = `${prod.description}`;
        prodDiv.appendChild(desc);
        displayDiv.appendChild(prodDiv);
    }
}