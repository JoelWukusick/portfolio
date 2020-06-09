import React, { useState } from 'react';
import BackButton from './BackButton.jsx';
import { TextField, Grid, Button, Container, Box, CircularProgress } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
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
  wrapper: {
    position: 'relative'
  },
  messageField: {
    height: '400px'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -32,
    marginLeft: -32,
  },
}))

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      alert('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    let data = { name, email, message };
    axios({
      method: 'post',
      url: '/contact',
      data: data,
      json: true
    })
      .then(res => {
        setLoading(false);
        alert('Thanks for reaching out! I will reply as soon as possible.');
        clearForm();
        setRedirect(true);
      })
      .catch(err => {
        setLoading(false);
        clearForm();
        alert(`Unable to sent message. ${err}`);
        console.log(err);
        setRedirect(true);
      });
  }

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    return (false)
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      {redirect ? <Redirect to={{ pathname: '/' }} /> : null}
      <BackButton />
      <Container maxWidth='sm'>
        <Box py={4}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction='column'>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setName(e.target.value)}
                  value={name}
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
                  value={email}
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
                  value={message}
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
                  <Button color='primary' className={classes.button} component={Link} to={'/'}>
                    Cancel
                  </Button>
                  <div className={classes.wrapper}>
                    <Button className={classes.button} color='primary' type='submit'>
                      Send
                  </Button>
                    {loading && <CircularProgress size={64} className={classes.buttonProgress} />}
                  </div>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  )
}
