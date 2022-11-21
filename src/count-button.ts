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

    private render(){
        console.log("test")
    }
}

customElements.define('count-button', CountButton)