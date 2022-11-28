import produce from "immer";
import {state} from "./model";

export default function increaseCounter() {
    state.next(produce(state.getValue(), draft => {
        draft.counter += 1;
    }))
}