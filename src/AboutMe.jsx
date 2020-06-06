import React from 'react';
import BackButton from './BackButton.jsx';
import { Grid, Typography, useMediaQuery, Box } from '@material-ui/core';
import theme from './theme.jsx';zz
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    objectFit: 'cover',
    width: '100%',
    maxWidth: 450
  },
  imgContainer: {
    width: '100%'
  },
  header: {
    fontFamily: 'Montserrat',
    fontWeight: 200,
    fontSize: '22pt',
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18pt',
    },
  }
}))

export default function AboutMe() {
  const classes = useStyles();
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <BackButton />
      <Grid container spacing={4}>
        <Grid item className={classes.imgContainer} xs={mobile ? 12 : small ? 5 : 4}>
          <img src='https://portfolio-jw.s3.us-east-2.amazonaws.com/headshot450.jpg' className={classes.img} />
        </Grid>
        <Grid item xs>
          <Typography className={classes.header} gutterBottom>
            I like to spend most of my free time building things.
          </Typography>
          <Box py={2}>
            <Typography paragraph>
              When it isn't websites it could be anything from guitar amps to furniture. The process of planning, executing, and refining is what keeps me engaged.          </Typography>
            <Typography paragraph>
              When I'm not building something, I enjoy cooking, playing board games, and going to the climbing gym.
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
