const stocks = [
    {
        company: 'VERU',
        symbol: 'VERU',
        shares: 500,
        price: 6.90
    },
    {
        company: 'IQSTEL Inc.',
        symbol: 'IQST',
        shares: 100,
        price: 0.52
    },
    {
        company: 'Royal Caribbean Group',
        symbol: 'RCL',
        shares: 50,
        price: 77.72
    },
    {
        company: 'SG Blocks, Inc.',
        symbol: 'SGBX',
        shares: 100,
        price: 4.43
    },
    {
        company: 'Toughbuilt Industries, Inc.',
        symbol: 'TBLT',
        shares: 500,
        price: 0.606
    },
    {
        company: 'AT&T',
        symbol: 'T',
        shares: 100,
        price: 28.15
    },
    {
        company: 'AMC',
        symbol: 'AMC',
        shares: 150,
        price: 36.99
    },
    {
        company: 'GE',
        symbol: 'GE',
        shares: 1000,
        price: 12.71
    }
];

// set where i want all of the cards to go
const docRoot = document.querySelector('.content');

// iterate through stocks to generate cards for each stock, display on page 
stocks.forEach(stock => {

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <stock-card symbol="${stock.symbol}" price="${stock.price}" shares="${stock.shares}">
    </stock-card>`;

    docRoot.append(newDiv);

})