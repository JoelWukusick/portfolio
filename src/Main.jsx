import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import data from './data.js';
import { Grid, Container, Typography, Box, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';
import { Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  hero: {
    fontFamily: 'Montserrat',
    fontWeight: 200,
    fontSize: '22pt',
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18pt',
    },
  }
}))

export default function Main() {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const routes = data.map(project => {
    return (<Route path={`/${project.name}`} exact render={props => <ProjectDetails project={project} />} />)
  })

  return (
    <>
      <Container>
        <Route path='/' exact>
          <Box pt={4} >
            <Typography className={classes.hero} align='left'>
              {/* HI! I'M A FULL STACK WEB DEVELOPER. CHECK OUT SOME EXAMPLES OF MY WORK! */}
  Hi! I'm a full stack {mobile ? <br /> : null} web developer. <br />Check out some {mobile ? <br /> : null}examples of my work!
          </Typography>
          </Box>
          <Grid className={classes.grid} container spacing={4}>
            {data.map((project, index) =>
              <ProjectCard data={project} key={index} />
            )}
          </Grid>
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        {routes}
      </Container>
    </>
  )
}
