class ButtonCount extends HTMLElement{
    constructor(){
        super();

        
        this.attachShadow({ mode:"open" });



        let clickButton = document.createElement("button");
        clickButton.clicks = 0;
        clickButton.textContent = `Times Clicked: ${clickButton.clicks}`;

        clickButton.addEventListener('click', () => {
            clickButton.clicks += 1;
            clickButton.textContent = `Times Clicked: ${clickButton.clicks}`;
        });


        this.shadowRoot.appendChild(clickButton);


       
    }

}


customElements.define("button-count",ButtonCount);
// ${this.clicks}