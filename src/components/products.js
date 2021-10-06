/* eslint-disable array-callback-return */
import { connect,useSelector,useDispatch } from "react-redux";
import { Button } from '@material-ui/core';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
// import { addProduct,getProduct ,getData, productInventory } from "../store/actions";
import { useEffect } from "react";
import {get,add,remove,invetory} from "../store/product"


const Product = props => {
    const dispatch=useDispatch()
    // useEffect(() => {
    //   props.add(dispatch(get()))
    // }, [dispatch, props, props.products])
    useEffect(() => {
        props.get();
    }, []);
    // const dispatch = useDispatch();

    const products = useSelector(state => state.productSlice);

    useEffect(() => {
        dispatch(get());
    }, [dispatch]);
    console.log(props.activeCategory);
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {products.map((items, idx) => {
                if (props.activeCategory.displayName === items.category)
                    return (
                        <Card key={idx} elevation={3}>
                            <CardMedia image={items.image}
                                height="140"
                                component="img"
                            />
                            <CardContent>
                                <Typography component="h2"> {items.name} </Typography>
                                <Typography component="h2"> Description: {items.description} </Typography>
                                <Typography component="h2"> Price: {items.price} </Typography>
                                <Typography component="h2"> In Stock: {items.inventoryCount} </Typography>
                                <Button variant="contained" color="secondery" 
                                onClick={(inventory) => {
                      if (items.inventoryCount) {
                        props.get(items);
                        // props.invetory(items);
                      } else {
                        alert("empty item");
                      }
                    }}
                    >Add To Cart </Button>
                            </CardContent>
                        </Card>
                    )
            })}
        </Grid>
        // <>
        // {console.log(props.get())}
        // {console.log(props.activeCategory)}
        // </>

    )

}

const mapStateToProps = state => ({
    products: state.productSlice.product,
    activeCategory: state.categorySlice.activeCategory
});
const mapDispatchToProps = { get,remove,add,invetory };


export default connect(mapStateToProps, mapDispatchToProps)(Product);