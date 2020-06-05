
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',

    width: '100%',
    height: '100%'
  },
  aspectRatioContainer: {
    width: '100%',
    paddingBottom: 'calc(50% - 70px)',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '50%'
    },
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    userSelect: 'none',
    backgroundColor: theme.palette.background.default
  },
  image: {
    position: 'absolute',
    left: 0,
    objectFit: 'contain',
    padding: '0 70px',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    width: '100%',
    heigth: '100%',
    maxHeight: '100%',
    color: theme.palette.background.default
  },
}))

export default function CarouselImage({ image, name }) {
  const classes = useStyles();

  return (

    <div className={classes.aspectRatioContainer}>
      <img className={classes.image} src={image} alt={name} />
    </div>
  )
}