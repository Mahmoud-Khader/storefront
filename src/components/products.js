/* eslint-disable array-callback-return */
import { connect,useSelector,useDispatch } from "react-redux";
import { Button } from '@material-ui/core';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { addProduct,getProduct ,getData, productInventory } from "../store/actions";
import { useEffect } from "react";


const Product = props => {
    const dispatch=useDispatch()
    useEffect(() => {
      props.getProduct(dispatch(getData()))
    }, [dispatch, props, props.products])
    // const dispatch = useDispatch();

    // const products = useSelector(state => state.productsReducer);

    // useEffect(() => {
    //     dispatch(getData());
    // }, [dispatch]);
    console.log(props.activeCategory);
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {props.products.map((items, idx) => {
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
                        props.addProduct(items);
                        props.productInventory(items);
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

    )

}

const mapStateToProps = state => ({
    products: state.productsReducer.product,
    activeCategory: state.categoryReducer.activeCategory
});
const mapDispatchToProps = { addProduct,getProduct, productInventory };


export default connect(mapStateToProps, mapDispatchToProps)(Product);