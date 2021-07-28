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
        company: 'IQSTEL Inc.',
        symbol: 'IQST',
        shares: 100
    },
    {
        company: 'Royal Caribbean Group',
        symbol: 'RCL',
        shares: 50
    },
    {
        company: 'SG Blocks, Inc.',
        symbol: 'SGBX',
        shares: 100
    },
    {
        company: 'Toughbuilt Industries, Inc.',
        symbol: 'TBLT',
        shares: 500
    },
    {
        company: 'AT&T',
        symbol: 'T',
        shares: 100
    },
    {
        company: 'AMC',
        symbol: 'AMC',
        shares: 150
    },
    {
        company: 'GE',
        symbol: 'GE',
        shares: 1000
    }
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