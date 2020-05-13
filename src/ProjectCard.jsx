import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, CardActionArea, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px'
  },
  cardMedia: {
    verticalAlign: 'top',
    paddingTop: '50%'
  },
  stretch: {
    verticalAlign: 'top',
    flexGrow: 1,
  },
}))

export default function AlbumCard({ data }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} key={data.name}>
        <div className={classes.stretch}>
          <CardActionArea >
            <CardMedia
              className={classes.cardMedia}
              image={data.imageThumbURL} />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography>
                {data.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
        <CardActions>
          <Button size="small" color="primary">
            Code
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}