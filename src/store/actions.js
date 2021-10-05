import axios from "axios";

const api='https://storefront0.herokuapp.com/product'
export const getData=()=>async (dispatch,state)=>{

let res =await axios.get(api)
dispatch(getProduct(res.data))
}


export const addProduct = (product) => {
    return {
      type: "ADD",
      payload: product,
    };
  };
  export const getProduct = (product) => {
    return {
      type: "GET",
      payload: product,
    };
  };
  
  export const deleteProduct = (product,idx) => {
    return {
      type: "DELETE",
      payload: {
        product:product,
        idx:idx
      },
    };
  };
  
  export const showCart = (status) => {
    return {
      type: "SHOW",
      payload: status
    };
  };
  
  export const productInventory = (product) => {
    return {
      type: "ADDPRODUCT",
      payload: product,
    };
  };