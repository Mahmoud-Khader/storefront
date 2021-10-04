export const addProduct = (product) => {
    return {
      type: "ADD",
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