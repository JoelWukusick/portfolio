import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, CardActionArea, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.grey['300'],
    borderRadius: 0
  },
  cardMedia: {
    verticalAlign: 'top',
    paddingTop: '50%'
  },
  stretch: {
    verticalAlign: 'top',
    flexGrow: 1,
  },
  title: {
    fontWeight: 400,
  },
  description: {
    fontWeight: 200,
  }
}))

export default function AlbumCard({ data }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} key={data.name} elevation={0}>
        <div className={classes.stretch}>
          <CardActionArea component={Link} to={`/${data.name}`}>
            <CardMedia
              className={classes.cardMedia}
              image={data.imageThumbURL} />
            <CardContent >
              <Typography className={classes.title}>
                {data.name}
              </Typography>
              <Typography className={classes.description}>
                {data.blurb}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
        <CardActions>
          {data.deployedURL ?
            <Button size="small" color="primary" target="_blank" href={data.deployedURL}>
              Demo
            </Button> : null}
          <Button size="small" color="primary" target="_blank" href={data.repository}>
            Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}