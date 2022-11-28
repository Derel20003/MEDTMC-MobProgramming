import { BehaviorSubject } from "rxjs"

interface Model{
    readonly counter : number; 
}

const initialState: Model = {
    counter: 0
}

export const state = new BehaviorSubject<Model>(initialState); 
