class CountButton extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        })
    }
}

customElements.define('count-button', CountButton)