const initialState = {
    categories: [
      {
        displayName: 'FOOD',
        normalizedName: 'food',
        description: 'FOOD Category'
      },
      {
        displayName: 'ELECTRONICS',
        normalizedName: 'elecronics',
        description: 'Elecronics Category'
      },
      {
        displayName: 'VIDEO GAMES',
        normalizedName: 'video games',
        description: 'Video Games Category'
      },
    ],
    product:[
      {
        category:'FOOD',
        name:'food',
        description:'Mansaf',
        price:"25$",
        inventoryCount:'Infinit',
        image:'https://cdn.theculturetrip.com/wp-content/uploads/2017/03/jordanian-mansaf-topped-with-herbs-1024x721.jpg'
      },
      {
        category:'FOOD',
        name:'food',
        description:'Pizza',
        price:"2.5$",
        inventoryCount:'500',
        image:'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg'
      },
      {
        category:'FOOD',
        name:'food',
        description:'Burger',
        price:"2.5$",
        inventoryCount:'1000',
        image:'https://img.etimg.com/thumb/width-640,height-480,imgsize-951452,resizemode-1,msid-66325015/industry/cons-products/food/burger-king-leaves-starbucks-behind/1.jpg'
      },
      {
        category:'ELECTRONICS',
        name:'elecronics',
        description:'Iphone11',
        price:"900$",
        inventoryCount:'100',
        image:'https://i.insider.com/5d7808702e22af12a2793d58?width=1200&format=jpeg'
      },
      {
        category:'ELECTRONICS',
        name:'elecronics',
        description:'Gaming PC',
        price:"1500$",
        inventoryCount:'50',
        image:'https://cdn.mos.cms.futurecdn.net/U5Fdom8yDwVcEivFjiqajF.jpg'
      },
      {
        category:'ELECTRONICS',
        name:'elecronics',
        description:'LabTop',
        price:"1000$",
        inventoryCount:'25',
        image:'https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_SL1000_.jpg'
      },
      {
        category:'VIDEO GAMES',
        name:'video games',
        description:'World Of Warcraft',
        price:"40$",
        inventoryCount:'Infinit',
        image:'https://cdn-cf.gamivo.com/image_original.jpg?f=119652&n=590ef020-fe2f-11e9-ba7b-1d746b5ec20a.jpg&h=0d24fbe66609206cd15bb856d8452fee'
      },
      {
        category:'VIDEO GAMES',
        name:'video games',
        description:'Dota 2',
        price:"For Free",
        inventoryCount:'Infinit',
        image:'https://i2.wp.com/laptopmedia.com/wp-content/uploads/2020/11/1599845493_dota-2-russia.png?ssl=1'
      },
      {
        category:'VIDEO GAMES',
        name:'video games',
        description:'Red Dead Redemption',
        price:"60$",
        inventoryCount:'Infinit',
        image:'https://i.ytimg.com/vi/F63h3v9QV7w/maxresdefault.jpg'
      }
      
    ],
    activeCategory: '',
  }
  
  
  function productsReducer(state = initialState, action) {
  
    const { type, payload } = action;
  
    switch (type) {
      case 'ACTIVE_CATEGORY':
        return { ...state, activeCategory: payload }
        default:
          return state;
    };
  }
  
  
  // action
  
  export const selectCategory = (category) => {
    return {
      type: 'ACTIVE_CATEGORY',
      payload: category
    }
  };
  
  
  
  export default productsReducer;