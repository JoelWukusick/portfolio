import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: '100',
    margin: theme.spacing(1)
  },
  right: {
    paddingRight: theme.spacing(2)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar >
        <Typography variant="h4" className={classes.title} >
          Joel Wukusick
          </Typography>
        <Button onClick={event => event.preventDefault} color="inherit" target="_blank" href='https://github.com/JoelWukusick'>
          <GitHubIcon />
        </Button>
        <Button onClick={event => event.preventDefault} color="inherit" target="_blank" href='https://www.linkedin.com/in/joel-w/'>
          <LinkedInIcon />
        </Button>
        <Button className={classes.right} onClick={event => event.preventDefault} color="inherit" >
          <MailIcon />
        </Button>
      </Toolbar>
    </AppBar>
  )
}