import React from 'react';
import { Button, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";



export default function BackButton() {

  return (
    <>
      <Box py={2}>
        <Button size='small' component={Link} to={'/'}><ArrowBackIcon fontSize='small' />back</Button>
      </Box>
    </>
  )
}
