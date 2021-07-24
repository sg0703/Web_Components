const stocks = [
    {
        company: 'VERU',
        symbol: 'VERU',
        shares: 508,
        price: 50
    },
    {
        company: 'IQSTEL Inc.',
        symbol: 'IQST',
        shares: 100,
        price: 50
    },
    {
        company: 'Royal Caribbean Group',
        symbol: 'RCL',
        shares: 50,
        price: 50
    },
    {
        company: 'SG Blocks, Inc.',
        symbol: 'SGBX',
        shares: 100,
        price: 50
    },
    {
        company: 'Toughbuilt Industries, Inc.',
        symbol: 'TBLT',
        shares: 500,
        price: 50
    },
    {
        company: 'AT&T',
        symbol: 'T',
        shares: 100,
        price: 50
    },
    {
        company: 'AMC',
        symbol: 'AMC',
        shares: 150,
        price: 65
    },
    {
        company: 'GE',
        symbol: 'GE',
        shares: 1000,
        price: 7
    }
];


const docRoot = document.querySelector('.content');

stocks.forEach(stock => {

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <stock-card symbol="${stock.symbol}" price="${stock.price}" shares="${stock.shares}">
    </stock-card>`;

    docRoot.append(newDiv);

})