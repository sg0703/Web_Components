/**
 *  Followed along with: 
 *  TraversyMedia 
 *  https://www.youtube.com/watch?v=PCWaFLy3VUo 
 */

const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 { color: coral }

        .user-card {
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            border-bottom: black 5px solid;
            margin-bottom: 10px;
            padding-bottom: 10px;
        }

        button {
            padding: 5px 10px;
            border-radius: 15px;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3><!-- access this in UserCard object below --></h3>
            <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        // call parent class constructor
        super();

        // TOGGLE
        this.showInfo = true;

        // create show-dom
        // this encapsulates all of the styling within the component
        this.attachShadow({ mode: 'open' });

        // attach shadowRoot to template
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // select h3 and insert name
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        // select img and insert name
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleButton = this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo) {
            info.style.display = 'block';
            toggleButton.innerText = 'Hide info';
        }
        else {
            info.style.display = 'none';
            toggleButton.innerText = 'Show info';
        }
    }
}

window.customElements.define('user-card', UserCard);