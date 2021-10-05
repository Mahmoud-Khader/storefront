import {applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import cartReducer from "./cart";
import productsReducer from "./product"
import categoryReducer from './categories';
import thunk from "./middleware/thunk"


let reducers = combineReducers({
     productsReducer,
     categoryReducer,
     cartReducer,
});
// let reducers = combineReducers({
//     store: productsReducer,
// });

const store = () => {
    // return createStore(reducers, composeWithDevTools());
    return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();