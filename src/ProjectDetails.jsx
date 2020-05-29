import React, { useContext } from 'react';
import { Button, Box } from '@material-ui/core';
import Context from './Context.jsx'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

export default function ProjectDetails({ project }) {
  const { setPage } = useContext(Context);
  return (
    <Box py={8}>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <Button size='small' onClick={() => { setPage('/') }} component={Link} to={'/'}><ArrowBackIcon fontSize='small' />back</Button>
        <h3>{project.name}</h3>
      </div>
    </Box>
  )
}

