// import React, { useContext } from 'react';
// import Typography from '@material-ui/core/Typography';
// import { Menu } from '@material-ui/core';
// import theme from './theme.jsx';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import MailIcon from '@material-ui/icons/Mail';
// import InfoIcon from '@material-ui/icons/Info';


import React, { useContext } from 'react';
import Context from './Context.jsx'
import { Button, IconButton, Menu, MenuItem, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { setPage } = useContext(Context);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    (
      <ListItem button onClick={event => event.preventDefault} color="inherit" onClick={() => setPage(`/about`)} component={Link} to={`/about`}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText >About Me</ListItemText>
      </ListItem>
    ), (
      <ListItem button component='a' color="inherit" href='https://www.linkedin.com/in/joel-w/'>
        <ListItemIcon>
          <LinkedInIcon />
        </ListItemIcon>
        <ListItemText > LinkedIn</ListItemText>
      </ListItem>
    ), (
      <ListItem button component='a'  color="inherit" href='https://github.com/JoelWukusick'>
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemText > GitHub</ListItemText>
      </ListItem>
    ), (
      <ListItem button onClick={event => event.preventDefault} color="inherit" onClick={() => setPage(`/contact`)} component={Link} to={`/contact`} >
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText > Contact Me</ListItemText>
      </ListItem>
    )
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 256,
            width: '25ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>

    // <Tooltip title='about me' arrow>
    //   <Button onClick={event => event.preventDefault} color="inherit" onClick={() => setPage(`/about`)} component={Link} to={`/about`}>
    //     <InfoIcon className={classes.linkButton} />
    //   </Button>
    // </Tooltip>
    // <Tooltip title='LinkedIn' arrow>
    //   <Button onClick={event => event.preventDefault} color="inherit" href='https://www.linkedin.com/in/joel-w/'>
    //     <LinkedInIcon className={classes.linkButton} />
    //   </Button>
    // </Tooltip>
    // <Tooltip title='GitHub' arrow>
    //   <Button onClick={event => event.preventDefault} color="inherit" href='https://github.com/JoelWukusick'>
    //     <GitHubIcon className={classes.linkButton} />
    //   </Button>
    // </Tooltip>
    // <Tooltip title='contact me' arrow>
    //   <Button onClick={event => event.preventDefault} color="inherit" >
    //     <MailIcon className={classes.linkButton} />
    //   </Button>
    // </Tooltip>
  )
}