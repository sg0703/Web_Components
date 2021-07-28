/**
 * handleForm adds new stock to the DOM using stock-card custom web component
 */

const addStockForm = document.getElementById('addStockForm');

addStockForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // zero out warning 
    clearWarning();

    // get inputs, including values, from DOM 
    let symbol = document.getElementById('newStockSymbol');
    let shares = document.getElementById('newStockShares');

    // generate card using custom element! 
    const newCard = document.createElement('stock-card');

    newCard.setAttribute('symbol', symbol.value);
    newCard.setAttribute('shares', shares.value);
    
    // add card to dom 
    docRoot.append(newCard);

    // add card to local storage
    const store = new StoredCards();
    store.addCard(symbol.value,shares.value);

    // clear out form
    symbol.value = '';
    shares.value = '';
})