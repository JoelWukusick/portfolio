import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
    fontWeight: '100',
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  menuItem: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3),
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar >
        <Typography variant="h4" className={classes.title}>
          Joel Wukusick
          </Typography>
        <Button className={classes.menuItem} onClick={event => event.preventDefault} color="inherit">
          GitHub
          </Button>
        <Button className={classes.menuItem} onClick={event => event.preventDefault} color="inherit">
          LinkedIn
          </Button>
      </Toolbar>
    </AppBar>
  )
}