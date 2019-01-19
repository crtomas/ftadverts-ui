class FTAdvertDashboard extends HTMLElement {
 constructor() {
    super();
	this._dataUrl = "http://192.168.99.100:3100";
	this._api;
	
	this.fetchData().then((json) => {
		if(JSON.stringify(json) !== JSON.stringify({})){
			this._api = json;
			this.render();
		}
	});

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `
            <style>
                p {
                    color: green;
                }
            </style>
            <p>FTAdvert v1015!</p>
			<p id="api_version">Loading ...</p>
    `;
  }
  fetchData(){
  	return fetch(this._dataUrl)
  		.then(function(response) {
  			return response.json();
  		})
  		.catch(function(error) {
  			return {}; 
  		});        
  }
  render(){
	const $p = document.getElementById("api_version");
	$p.innerHTML = this._api.api;

  }
}
window.customElements.define("ftadvert-dashboard", FTAdvertDashboard);