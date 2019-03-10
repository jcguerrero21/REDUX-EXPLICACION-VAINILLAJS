import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';
import { multiplicadorAction } from './contador/contador.actions';

class Store<T> {   

    constructor( private reducer: Reducer<T>,  private state: T) {
    }

    getState() {
        return this.state;
    }
    
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store(contadorReducer, 10);

console.log(store.getState()); //10

store.dispatch(incrementadorAction); //11

console.log(store.getState());

store.dispatch(incrementadorAction); //12
store.dispatch(incrementadorAction); //13
console.log(store.getState());

store.dispatch(incrementadorAction); //14
store.dispatch(multiplicadorAction); //28
console.log(store.getState());