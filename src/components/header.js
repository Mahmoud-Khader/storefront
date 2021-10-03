import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

export default function Header() {
    return (
        <>
          <ButtonAppBar />
        </>
      );
    }
  const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));
    function ButtonAppBar() {
        const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{marginLeft:'20px'}} className={classes.title}>
            MAHMOUD KHADER STORE
          </Typography>
          <MenuItem>
        <IconButton aria-label="show 2 new notifications" color="inherit">
          <Badge  color="secondary">
            <ShoppingCartIcon style={{marginRight:'20px'}} />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}