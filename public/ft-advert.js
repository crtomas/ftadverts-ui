class FTAdvert extends HTMLElement {
 constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `
            <style>
                p {
                    color: green;
                }
            </style>
            <p>FTAdvert!</p>
    `;
  }
}
window.customElements.define("ft-advert", FTAdvert);