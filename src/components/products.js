/* eslint-disable array-callback-return */
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { addProduct, productInventory } from "../store/actions";

const Product = props => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {props.products.map((items, idx) => {
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
    products: state.productsReducer.activeProduct,
    activeCategory: state.categoryReducer.activeCategory
});
const mapDispatchToProps = { addProduct, productInventory };


export default connect(mapStateToProps, mapDispatchToProps)(Product);