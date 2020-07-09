import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StarsIcon from '@material-ui/icons/Stars';

export default function Dashboard ({children}) {


  return (
    <div className="root">
      <CssBaseline/>
      <AppBar
        position="absolute"
        className="appBar"
      >
        <Toolbar className="toolbar">
          <StarsIcon/>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className="title"
          >
            Find reviews
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="content">
        <div className="appBarSpacer"/>
        <Container maxWidth="lg" className="main-container">
          {children}
        </Container>
      </main>
    </div>
  );
}
