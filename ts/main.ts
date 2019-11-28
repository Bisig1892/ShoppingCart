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
    alert('You clicked Buy');
}