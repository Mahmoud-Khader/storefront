const initialState = {
    product:[
      {
        category:'FOOD',
        name:'Mansaf',
        description:'Jordinain tradisional food ',
        price:"25$",
        inventoryCount:100,
        image:'https://cdn.theculturetrip.com/wp-content/uploads/2017/03/jordanian-mansaf-topped-with-herbs-1024x721.jpg'
      },
      {
        category:'FOOD',
        name:'Pizza',
        description:'Cheese pizza',
        price:"2.5$",
        inventoryCount:500,
        image:'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg'
      },
      {
        category:'FOOD',
        name:'Burger',
        description:'BEEF Burger',
        price:"2.5$",
        inventoryCount:1000,
        image:'https://img.etimg.com/thumb/width-640,height-480,imgsize-951452,resizemode-1,msid-66325015/industry/cons-products/food/burger-king-leaves-starbucks-behind/1.jpg'
      },
      {
        category:'ELECTRONICS',
        name:'Iphone11',
        description:'Brand New Phone',
        price:"900$",
        inventoryCount:100,
        image:'https://i.insider.com/5d7808702e22af12a2793d58?width=1200&format=jpeg'
      },
      {
        category:'ELECTRONICS',
        name:'Gaming PC',
        description:'Super Fast PC',
        price:"1500$",
        inventoryCount:50,
        image:'https://cdn.mos.cms.futurecdn.net/U5Fdom8yDwVcEivFjiqajF.jpg'
      },
      {
        category:'ELECTRONICS',
        name:'LabTop',
        description:'Gaming Labtop',
        price:"1000$",
        inventoryCount:25,
        image:'https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_SL1000_.jpg'
      },
      {
        category:'VIDEO GAMES',
        name:'World Of Warcraft',
        description:'RPG Game',
        price:"40$",
        inventoryCount:9999,
        image:'https://cdn-cf.gamivo.com/image_original.jpg?f=119652&n=590ef020-fe2f-11e9-ba7b-1d746b5ec20a.jpg&h=0d24fbe66609206cd15bb856d8452fee'
      },
      {
        category:'VIDEO GAMES',
        name:'Dota 2',
        description:'Multiplayer Game 5 vs 5',
        price:"For Free",
        inventoryCount:9999,
        image:'https://i2.wp.com/laptopmedia.com/wp-content/uploads/2020/11/1599845493_dota-2-russia.png?ssl=1'
      },
      {
        category:'VIDEO GAMES',
        name:'Red Dead Redemption',
        description:'Awsome Reality Game',
        price:"60$",
        inventoryCount:99999,
        image:'https://i.ytimg.com/vi/F63h3v9QV7w/maxresdefault.jpg'
      }
      
    ],
    activeProduct: [],
  }
  
  
  const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ACTIVE":
       state.activeProduct=state.product.filter(item=>{
         return (payload===item.category ? item.category:null)
       })
       console.log(state.activeProduct);
        return state;
  
  
      case "ADDPRODUCT":
        state.activeProduct = state.activeProduct.map((item) => {
          if (item.name === payload.name) {
            if (item.inventoryCount > 0) {
              item.inventoryCount = item.inventoryCount - 1;
            }
            return item;
          }
          return item;
        });
        return {...state};
  
      case "DELETE":
        state.activeProduct = state.activeProduct.map((item) => {
          if (item.name === payload.product.name) {
            item.inventoryCount = item.inventoryCount + 1;
  
            return item;
          }
          return item;
        });
        return {...state};
  
      default:
        return state;
    }
  };
  
  
  
  
  export default productsReducer;