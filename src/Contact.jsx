import React, { useState, useContext } from 'react';
import BackButton from './BackButton.jsx';
import { TextField, Grid, Button, Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Context from './Context.jsx'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    margin: '10px'
  },
  messageField: {
    height: '400px'
  }
}))

export default function Contact() {
  const { setPage } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, message };
    axios({
      method: 'post',
      url: '/email',
      data: data,
      json: true
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const validateEmail = () => {

  };

  return (
    <>
      <BackButton />
      <Container maxWidth='sm'>
        <Box py={4}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction='column'>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setName(e.target.value)}
                  fullWidth
                  required
                  label='name'
                  id='name'
                  name='name'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                  required
                  label='Email'
                  id='email'
                  name='email'
                  variant='outlined'
                />
              </Grid>
              <Grid className={classes.messageField} item xs={12}>
                <TextField
                  onChange={e => setMessage(e.target.value)}
                  fullWidth
                  required
                  id='message'
                  label='message'
                  name='message'
                  multiline
                  rows={4}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12} >
                <div className={classes.buttons}>
                  <Button color='primary' className={classes.button} onClick={() => { setPage('/') }} component={Link} to={'/'}>
                    Cancel
              </Button>
                  <Button className={classes.button} color='primary' type='submit'>
                    Send
              </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  )
}
