import { selectCategory } from '../store/product';
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import { Breadcrumbs, Typography } from '@material-ui/core';


const Categories= props => {

  return (
    <Breadcrumbs elevation={3}>
      {props.categories.map((category,idx) => {
        return (
          <Button key={idx} variant="contained" color="primary"  onClick={() => props.selectCategory(category.normalizedName)}>
            <Typography component="h2"> {category.displayName} </Typography>
          </Button>
        )
      })}
    </Breadcrumbs>
  )
}

const mapStateToProps = state => ({
    categories: state.store.categories
});

const mapDispatchToProps = {selectCategory};

export default connect(mapStateToProps,mapDispatchToProps)(Categories);