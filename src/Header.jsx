import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, useMediaQuery, Tooltip, Typography, Toolbar, AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";
import theme from './theme.jsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import MobileMenu from './MobileMenu.jsx';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: theme.palette.grey['300'],
  },
  title: {
    letterSpacing: 1.5,
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontFamily: 'EB Garamond',
    fontSize: '22pt',
    textDecoration: 'none',
    outline: 'none',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18pt',
    },
  },
  linkButton: {
    fontSize: '18pt',
    color: theme.palette.text.secondary,
  }
}));

export default function Header() {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <AppBar className={classes.appBar} position='sticky' color='inherit' elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h4" className={classes.title} component={Link} to={`/`}>
            Joel Wukusick
          </Typography>
          {mobile ? <MobileMenu /> : (
            <>
              <Tooltip title='about me' arrow>
                <Button onClick={event => event.preventDefault} color="inherit" component={Link} to={`/about`}>
                  <InfoIcon className={classes.linkButton} />
                </Button>
              </Tooltip>
              <Tooltip title='LinkedIn' arrow>
                <Button onClick={event => event.preventDefault} color="inherit" href='https://www.linkedin.com/in/joel-w/'>
                  <LinkedInIcon className={classes.linkButton} />
                </Button>
              </Tooltip>
              <Tooltip title='GitHub' arrow>
                <Button onClick={event => event.preventDefault} color="inherit" href='https://github.com/JoelWukusick'>
                  <GitHubIcon className={classes.linkButton} />
                </Button>
              </Tooltip>
              <Tooltip title='contact me' arrow>
                <Button onClick={event => event.preventDefault} color="inherit" component={Link} to={`/contact`} >
                  <MailIcon className={classes.linkButton} />
                </Button>
              </Tooltip>
            </>
          )
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}