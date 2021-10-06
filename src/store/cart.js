// let initialState = {
//     cart: [],
//     show: false,
//     count: 0,
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case "ADD":
//        let cart=[...state.cart,payload]
//         return { cart:cart , show: state.show, count: state.count +1};
  
//       case "DELETE":
//         console.log(payload);
//         const product = state.cart.filter((item,idx)=> idx!==payload.idx)
//         return { cart: product, show: state.show, count: state.count -1 };
  
//         case "SHOW":

//         return {cart:state.cart,show:payload,count:state.count}
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;

import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
        cart: [],
    show: false,
    count: 0,
},
  reducers: {
      add(state, action) {
        let cart=[...state.cart,action.payload]
                return { cart:cart , show: state.show, count: state.count +1};
      },
      remove(state, action) {
          // return state.filter(product => product.name !== action.payload);
                  const product = state.cart.filter((item,idx)=> idx!==action.payload.idx)
        return { cart: product, show: state.show, count: state.count -1 };
      },
      show(state, action) {
        return {cart:state.cart,show:action.payload,count:state.count}
      },
  }
});


  
export const { add, remove,show } = cartSlice.actions;
  
export default cartSlice.reducer