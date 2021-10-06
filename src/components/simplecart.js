import React from "react";
import { connect } from "react-redux";
import { remove } from "../store/actions";
import { Button } from "@material-ui/core";

const SimpleCart = (props) => {
  return (
    <>
    <div style={{position:"absolute", right:"20px"}}>

    
      <section >
       
          <ui>
            { props.cart.show&&
            props.cart.cart.map((item, idx) => {
              return (
                <li key={idx}>
                  <span>{item.name}</span>
                  <Button
                    color="secondary"
                    onClick={() => {
                      props.remove(item,idx);
                    }}
                  >
                   
                    Delete 
                  </Button>
                </li>
              );
            })}
          </ui>
    
      </section>
      </div>
    </>
  );
};

const mapStateToprops = (state) => {
  return { cart: state.cartSlice };
};
const mapDispatchToProps = { remove };

export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);