import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { NavLink, useMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '1rem',
  },
  active: {
    textDecoration: 'underline'
  }
});

export const Header = () => {
  const classes = useStyles();

  const isActive = (match) => {
    return match ? classes.active : '';
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My HW-10
        </Typography>
        <Button component={NavLink} to="/" className={`${classes.button} ${isActive(useMatch('/'))}`}>Home</Button>
        <Button component={NavLink} to="/users" className={`${classes.button} ${isActive(useMatch('/users'))}`}>Users</Button>
        <Button component={NavLink} to="/posts" className={`${classes.button} ${isActive(useMatch('/posts'))}`}>Posts</Button>
        <Button component={NavLink} to="/comments" className={`${classes.button} ${isActive(useMatch('/comments'))}`}>Comments</Button>
      </Toolbar>
    </AppBar>
  );
};
