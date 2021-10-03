import { connect } from "react-redux";

import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';


const Product = props => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {props.products.map((items, idx) => {
                if (props.activeCategory === items.name)
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
                            </CardContent>
                        </Card>
                    )
            })}
        </Grid>
    )

}

const mapStateToProps = state => ({
    products: state.store.product,
    activeCategory: state.store.activeCategory
});


export default connect(mapStateToProps)(Product);