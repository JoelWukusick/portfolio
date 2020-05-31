import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import data from './data.js';

import { Grid, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route } from "react-router-dom";
import ProjectDetails from './ProjectDetails.jsx';

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}))

export default function Main() {
  const classes = useStyles();
  const routes = data.map(project => {
    return (<Route path={`/${project.name}`} exact render={props => <ProjectDetails project={project} />} />)
  })
  console.log(routes);

  return (
    <Container>
      <BrowserRouter>
          <Route path='/' exact>
            <Grid className={classes.grid} container spacing={8}>
              {data.map((project, index) =>
                <ProjectCard data={project} key={index} />
              )}
            </Grid>
          </Route>
          {routes}
      </BrowserRouter>
    </Container>
  )
}
