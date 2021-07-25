// stockList web component - displays stock data in a card, renders button to remove from dom - css in external file 

const template = document.createElement('template');

template.innerHTML = `
    <link rel="stylesheet" href="./css/stockCard.css">

    <div class="card-container">
        <div class="stock-symbol">
            <h2 id="stock-symbol-text">Card Title</h3>
        </div>
        <div class="stock-data">
            <h4>Price</h4>
            <p id="stock-price-text"></p>
            <h4>Shares</h4>
            <p id="stock-shares-text"></p>
        </div>
        <div class="stock-value">
            <h3 id="stock-value-text">Stock Value</h3>
        </div>
    </div>
`;

class StockCard extends HTMLElement {
    constructor() {
        super();

        // display data by default
        this.displayData = true;

        // set variables 
        this.shares = this.getAttribute('shares');
        this.price = this.getAttribute('price');

        // create shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // set title for card
        this.shadowRoot.querySelector('#stock-symbol-text').innerText = this.getAttribute('symbol');

        // set initial values for price, shares, value
        this.shadowRoot.querySelector('#stock-price-text').innerText = this.formatPrice(this.price);

        this.shadowRoot.querySelector('#stock-shares-text').innerText = this.shares;

        this.shadowRoot.querySelector('#stock-value-text').innerText = this.getValue();
    }

    getValue() {
        let total = this.shares * this.price;
        return this.formatPrice(total);
    }

    formatPrice(number) {
        const formattedNum = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 2}).format(number);

        return formattedNum;
    }

    // watch for changes to attributes below
    static get observedAttributes() {
        return ["symbol", "price", "shares"];
    }

    // when they change, update values so it re-renders properly
    // this was necessary to allow document.createElement and 
    // setAttribute to work properly without returning null values  
    attributeChangedCallback(name, oldValue, newValue) {
        // if values haven't changed, do nothing
        if(oldValue === newValue) {
            return;
        }

        // set object properties correctly 
        this[name] = newValue;

        // make sure price is formatted before rendering
        if(name === 'price') {
            this.shadowRoot.querySelector(`#stock-price-text`).innerText = this.formatPrice(newValue);
        }
        else {
            this.shadowRoot.querySelector(`#stock-${name}-text`).innerText = newValue;
        }
        
        // calculate value of holding and render to card
        this.shadowRoot.querySelector('#stock-value-text').innerText = this.getValue();
    }

    // set up toggling display of content
    connectedCallback() {
        this.shadowRoot.querySelector('.stock-symbol').addEventListener('click', () => this.toggleDisplay());
    }

    // remove event listener
    disconnectedCallback() {
        this.shadowRoot.querySelector('.stock-symbol').removeEventListener();
    }

    // toggle display
    toggleDisplay() {
        let stockData = this.shadowRoot.querySelector('.stock-data');

        if(this.showData) {
            stockData.style.display = 'block';
        }
        else {
            stockData.style.display = 'none';
        }

        this.showData = !this.showData;
    }
}

window.customElements.define('stock-card', StockCard);