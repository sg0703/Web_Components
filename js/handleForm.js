/**
 * handleForm adds new stock to the DOM using stock-card custom web component
 */

const addStockForm = document.getElementById('addStockForm');

addStockForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get inputs, including values, from DOM 
    let symbol = document.getElementById('newStockSymbol');
    let shares = document.getElementById('newStockShares');
    let price = document.getElementById('newStockPrice');

    // generate card using custom element! 
    const newCard = document.createElement('stock-card');

    newCard.setAttribute('symbol', symbol.value);
    newCard.setAttribute('shares', shares.value);
    newCard.setAttribute('price', price.value);
    
    // add card to dom 
    docRoot.append(newCard);

    // clear out form
    symbol.value = '';
    price.value = '';
    shares.value = '';
})