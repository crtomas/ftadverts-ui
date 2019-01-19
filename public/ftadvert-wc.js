class FTAdvertDashboard extends HTMLElement {
 constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `
            <style>
                p {
                    color: green;
                }
            </style>
            <p>FTAdvert v115!</p>
    `;
  }
}
window.customElements.define("ftadvert-dashboard", FTAdvertDashboard);