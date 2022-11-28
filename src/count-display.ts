import { html, render } from "lit-html";
import { state } from "./model";

const template = (value: number) => html` <h1>Counter: ${value}</h1> `;

class CountDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open",
        });
    }

    async connectedCallback() {
        state.subscribe((model) => {
            this.render(model.counter);
        });
    }

    private render(value: number) {
        render(template(value), this.shadowRoot);
    }
}

customElements.define('count-display', CountDisplay)