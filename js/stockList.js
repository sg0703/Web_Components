/**
 * stockList simulates an API request, renders fake data using custom web component
 */

// using array to simulate database pull (may convert to axios req later)
const stocks = [
    {
        company: 'VERU',
        symbol: 'VERU',
        shares: 500
    },
    {
        company: 'Royal Caribbean Group',
        symbol: 'RCL',
        shares: 50
    },
    {
        company: 'Toughbuilt Industries, Inc.',
        symbol: 'TBLT',
        shares: 500
    },
];

// set where i want all of the cards to go
const docRoot = document.querySelector('.content');

// iterate through stocks to generate cards for each stock, display on page 
stocks.forEach(stock => {
    const newCard = document.createElement('stock-card');

    newCard.setAttribute('symbol', stock.symbol);
    newCard.setAttribute('shares', stock.shares);
    newCard.setAttribute('price', stock.price);
    
    docRoot.append(newCard);
})