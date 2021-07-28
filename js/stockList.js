/**
 * stockList simulates an API request, renders fake data using custom web component
 */


// pull stored cards from array
const store = new StoredCards();

const stocks = store.getCardsArray();

// set where i want all of the cards to go
const docRoot = document.querySelector('.content');

if(stocks.length === 0) {
    displayWarning();
}
else {
    // iterate through stocks to generate cards for each stock, display on page 
    stocks.forEach(stock => {
        const newCard = document.createElement('stock-card');

        newCard.setAttribute('symbol', stock.symbol);
        newCard.setAttribute('shares', stock.shares);
        newCard.setAttribute('price', stock.price);
        
        docRoot.append(newCard);
    });
}