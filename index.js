//import { createStore } from "redux";
const createStore = require("redux").createStore

//action
function incrementCounter() {
    return {
        type: "INCREMENT_COUNTER",
    };
}

function decrementCounter () {
    return {
        type: "DECREMENT_COUNTER",
    }
}

const initialState = {
    counter: 0,
    number : 5,
};

//reducer

const conterreducer = (state = initialState , action) => {
    switch(action.type){
        case "INCREMENT_COUNTER":
            return {
                ...state, // immer
                counter: state.counter +1 ,
            };
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter:state.counter -1,
            }
            default:
                return state;
    }
};

//store

const store = createStore(conterreducer)

console.log(store.getState())

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
console.log(store.getState())

store.dispatch(decrementCounter())
console.log(store.getState())
