import { connect } from "react-redux";
import {Typography} from '@material-ui/core';

const ActiveCategory= props => {

  return (
      <>
      {props.ActiveCategory &&
    <Typography variant="h4" > Active Category: {props.activeCategory}</Typography>
      }
      </>
  );
}

const mapStateToProps = state => ({
    ActiveCategory:  state.categoryReducer.activeCategory
});

export default connect(mapStateToProps)(ActiveCategory);