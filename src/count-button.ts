class CountButton extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        })
    }

    async connectedCallback(){
        this.render()
    }

    private render() {
        let button = document.querySelector("template > button#count-button");
        // noch nicht getestet:
        button.addEventListener("click", () => {
            console.log("clicked")
        })
    }
}

customElements.define('count-button', CountButton)