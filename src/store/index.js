import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import productsReducer from "./product"


let reducers = combineReducers({
    store: productsReducer,
});

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();