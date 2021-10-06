// const initialState = {
//     categories: [
//       {
//         displayName: 'FOOD',
//         normalizedName: 'FOOD',
//         description: 'FOOD Category'
//       },
//       {
//         displayName: 'ELECTRONICS',
//         normalizedName: 'ELECTRONICS',
//         description: 'Elecronics Category'
//       },
//       {
//         displayName: 'VIDEO GAMES',
//         normalizedName: 'VIDEO GAMES',
//         description: 'Video Games Category'
//       },
//     ],
//     activeCategory: "",
//   };


//   const categoryReducer = (state = initialState, action) => {
//     let { type, payload } = action;
//     switch (type) {
//       case "ACTIVE":
//           let active=state.categories.filter(item=>{
//               return payload===item.normalizedName? item.normalizedName:""
//           })

//         let activeCategory = {
//             displayName:active[0].displayName,
//           normalizedName:active[0].normalizedName,
//           description:active[0].description
//         };

//         let categories = state.categories;

//         return { activeCategory, categories };
//       default:
//         return state;
//     }
//   };

//   //actions
//   export const selectCategory = (name) => {
//     return {
//       type: "ACTIVE",
//       payload: name,
//     };
//   };


//   export default categoryReducer;


import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      {
        displayName: 'FOOD',
        normalizedName: 'FOOD',
        description: 'FOOD Category'
      },
      {
        displayName: 'ELECTRONICS',
        normalizedName: 'ELECTRONICS',
        description: 'Elecronics Category'
      },
      {
        displayName: 'VIDEO GAMES',
        normalizedName: 'VIDEO GAMES',
        description: 'Video Games Category'
      },
    ],
    activeCategory: "",
  },
  reducers: {
    // add(state, action) {


    //     state.push({ name: action.payload });
    // },
    active(state, action) {
      // return state.filter(product => product.name !== action.payload);
      let active = state.categories.filter(item => {
        return action.payload === item.normalizedName ? item.normalizedName : ""
      })

      let activeCategory = {
        displayName: active[0].displayName,
        normalizedName: active[0].normalizedName,
        description: active[0].description
      };

      let categories = state.categories;

      return { activeCategory, categories };

    }
  }
});



// export const get = () => async dispatch => {
//   const response = await fetch('https://storefront0.herokuapp.com/product');
//   const products = await response.json();
//   products.results.forEach(product => dispatch(add(product.name)));
// }




export const { active } = categorySlice.actions;

export default categorySlice.reducer;