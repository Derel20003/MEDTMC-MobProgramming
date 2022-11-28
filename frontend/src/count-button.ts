import produce from "immer";
import { html, render } from "lit-html"
import { state } from "./model";
import increaseCounter from "./counter-service";

const template = html`
        <button id="count-button">Add</button>
    `

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
        render(template, this.shadowRoot)
        var button = this.shadowRoot.querySelector('button')
        button.addEventListener("click", increaseCounter)
    }
}
customElements.define('count-button', CountButton)
