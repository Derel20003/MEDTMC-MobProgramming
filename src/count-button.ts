import produce from "immer";
import { html, render } from "lit-html"
import { state } from "./model";

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
        button.addEventListener("click", () => {
            state.next(produce(state.getValue(), draft => {
                draft.counter += 1; 
            }))
        })
    }
}
customElements.define('count-button', CountButton)
