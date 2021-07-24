// stockList web component - displays stock data in a card, renders button to remove from dom

const template = document.createElement('template');

template.innerHTML = `
    <link rel="stylesheet" href="./css/stockCard.css">

    <div class="card-container">
        <div class="stock-symbol">
            <h2 id="stock-symbol-text">Card Title</h3>
        </div>
        <div class="stock-data">
            <ul>
                <li id="stock-price"></li>
                <li id="stock-shares"></li>
            </ul>
        </div>
        <div id="stock-value">
            <h3 id="stock-value-text"></h3>
        </div>
    </div>
`;

class StockCard extends HTMLElement {
    constructor() {
        super();

        // set variables 
        this.shares = this.getAttribute('shares');
        this.price = this.getAttribute('price');

        // create shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // set title for card
        this.shadowRoot.querySelector('#stock-symbol-text').innerText = this.getAttribute('symbol');

        // set initial values for price, shares, value
        this.shadowRoot.querySelector('#stock-price').innerText = this.price;

        this.shadowRoot.querySelector('#stock-shares').innerText = this.shares;

        this.shadowRoot.querySelector('#stock-value-text').innerText = this.getValue();
    }

    getValue() {
        return this.formatPrice(this.shares * this.price);
    }

    formatPrice(number) {
        number = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 2}).format(number);
    
        return number;
    }
}

window.customElements.define('stock-card', StockCard);