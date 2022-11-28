import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import increaseCounter from "./counter-service";

class CounterSocket extends HTMLElement {
     subject: WebSocketSubject<string>;

     connectedCallback() {
         this.subject = webSocket('ws://localhost:8080/count/david')
         this.subject.subscribe({
             next: increaseCounter, // Called whenever there is a message from the server.
             error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
             complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
         });
    }
}

customElements.define('counter-websocket', CounterSocket);