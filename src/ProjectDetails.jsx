import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography, useMediaQuery } from '@material-ui/core';
import theme from './theme.jsx';
import { Carousel } from "react-responsive-carousel";
import './carousel.css';
import CarouselImage from './CarouselImage.jsx';
import BackButton from './BackButton.jsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles((theme) => ({
  navButton: {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 35px)',
    cursor: 'pointer',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.text.disabled,
    outline: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    fontSize: '50px',
  },
  right: {
    right: 0,
  },
  left: {
    left: 0,
  },
  ul: {
    marginTop: '0px'
  }
}));

export default function ProjectDetails({ project }) {
  const classes = useStyles();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <BackButton />
      <Box pb={4}>
        <Carousel
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <Button className={`${classes.navButton} ${classes.left}`} aria-hidden='true' type='button' onClick={onClickHandler} >
                <NavigateBeforeIcon className={classes.icon} />
              </Button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Button className={`${classes.navButton} ${classes.right}`} aria-hidden='true' type='button' onClick={onClickHandler} >
                <NavigateNextIcon className={classes.icon} />
              </Button>
            )
          }>
          {project.images.map(image => <CarouselImage image={image} name='name' />)}
        </Carousel>
      </Box>
      <Box py={4} px={small ? 0 : 10}>
        <Typography variant='h6' >
          {project.name}
        </Typography>
        <Typography gutterBottom>
          {project.description}
        </Typography>
        <Typography variant='h6' >
          Aims
        </Typography>
        <ul className={classes.ul}>
          {project.aims.map(aim => <li>{aim}</li>)}
        </ul>
        <Typography variant='h6' >
          Technologies Used
        </Typography>
        <ul className={classes.ul}>
          {project.technologies.map(tech => <li>{tech}</li>)}
        </ul>
        <Button color="primary" target="_blank" href={project.deployedURL}>
          Demo
        </Button>
        <Button color="primary" target="_blank" href={project.repository}>
          Code
        </Button>
      </Box>
    </>
  )
}
