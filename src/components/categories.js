import { active } from '../store/categories';
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import { Breadcrumbs, Typography } from '@material-ui/core';


const Categories= props => {

  return (
    <Breadcrumbs elevation={3}>
      {props.categories.map((category,idx) => {
        return (
          <Button key={idx} variant="contained" color="primary"  onClick={() => props.active(category.normalizedName)}>
            <Typography component="h2"> {category.normalizedName} </Typography>
          </Button>
        )
      })}
    </Breadcrumbs>
  )
}

const mapStateToProps = state => ({
    categories: state.categorySlice.categories
});

const mapDispatchToProps = {active};

export default connect(mapStateToProps,mapDispatchToProps)(Categories);