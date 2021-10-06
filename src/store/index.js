import {applyMiddleware, combineReducers, createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
import cartSlice from "./cart";
import productSlice from "./product"
import categorySlice from './categories';
// import thunk from "./middleware/thunk"
import { configureStore } from "@reduxjs/toolkit";


let reducers = combineReducers({
    productSlice,
    categorySlice,
    cartSlice,
});
// let reducers = combineReducers({
//     store: productsReducer,
// });

// const store = () => {
//     // return createStore(reducers, composeWithDevTools());
//     return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
// }
const store = configureStore({ reducer: reducers });

export default store;