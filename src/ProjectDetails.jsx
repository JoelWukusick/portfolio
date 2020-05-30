import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js';
import { Button, Box, useMediaQuery } from '@material-ui/core';
import Context from './Context.jsx'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.css';
import CarouselImage from './CarouselImage.jsx';
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
    right: 30,
  },
  left: {
    left: 30,
  }
}));

export default function ProjectDetails({ project }) {
  const { setPage } = useContext(Context);
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Box py={2}>
        <Button size='medium' onClick={() => { setPage('/') }} component={Link} to={'/'}><ArrowBackIcon fontSize='medium' />back</Button>
      </Box>

      <Carousel
        infiniteLoop
        showIndicators={mobile}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
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
      <h2>
        {project.name}
      </h2>
      <p>
        {project.description}
      </p>
      <h3>
        Technologies Used
      </h3>
      <p>
        {project.technologies}
      </p>
      <Button color="primary" target="_blank" href={project.repository}>
        Code
      </Button>
      <Button color="primary" target="_blank" href={project.deployedURL}>
        Demo
      </Button>
    </>
  )
}
