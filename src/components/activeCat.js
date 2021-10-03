import { connect } from "react-redux";
import {Typography} from '@material-ui/core';

const ActiveCategory= props => {

  return (
      <>
      {props.activeCategory &&
    <Typography variant="h4" > Active Category: {props.activeCategory}</Typography>
      }
      </>
  );
}

const mapStateToProps = state => ({
    activeCategory:  state.store.activeCategory
});

export default connect(mapStateToProps)(ActiveCategory);