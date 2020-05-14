import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
    fontWeight: '100',
  },
  right: {
    paddingRight: theme.spacing(3)
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
        <Button onClick={event => event.preventDefault} color="inherit">
          <GitHubIcon />
        </Button>
        <Button className={classes.right} onClick={event => event.preventDefault} color="inherit">
          <LinkedInIcon />
        </Button>
      </Toolbar>
    </AppBar>
  )
}