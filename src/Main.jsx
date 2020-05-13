import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import data from './data.js';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}))

export default function Main() {
  const classes = useStyles();

  return (
    <Container>
      <Grid className={classes.grid} container spacing={8}>
        {data.map((project, index) =>
          <ProjectCard data={project} key={index} />
        )}
      </Grid>
    </Container>
  )
}
