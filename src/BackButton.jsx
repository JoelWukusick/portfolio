import React, { useContext } from 'react';
import { Button, Box } from '@material-ui/core';
import Context from './Context.jsx'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";



export default function BackButton() {
  const { setPage } = useContext(Context);

  return (
    <>
      <Box py={2}>
        <Button size='small' onClick={() => { setPage('/') }} component={Link} to={'/'}><ArrowBackIcon fontSize='small' />back</Button>
      </Box>
    </>
  )
}
