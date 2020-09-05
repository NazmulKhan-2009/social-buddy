// import React from 'react';

// const Header = () => {
//   return (
//     <div>
//       <nav>
//         <a href="/home">Home</a>
//         <a href="/details">Details</a>
//         <a href="/others">Oher Info</a>
//       </nav>
//     </div>
//   );
// };

// export default Header;


/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../../src/logo.svg"
import "../../../src/App.css"
// GRID START
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


// GRID END
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(20),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const Header = () => {
  const classes = useStyles();

  return (
    






<div className={classes.root}>
  <Grid container spacing={0}>

  <Grid item xs={11}>
          <Paper className={classes.paper}>
          <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{padding:"2px",marginLeft:"20px"}}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" className={classes.title}>
            Social Buddy
          </Typography>
          <div style={{paddingLeft:"300px"}}>
          {/* <a href="/home"><Button color="inherit">Home</Button></a> */}
          <Button color="inherit"><a href="/home" style={{color:"white",textDecoration: "none"}}>Home</a></Button>
          <Button color="inherit"><a href="/details" style={{color:"white",textDecoration: "none"}}>Details</a></Button>
          <Button color="inherit"><a href="/others" style={{color:"white",textDecoration: "none"}}>Other</a></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
  
          
          
          </Paper>
        </Grid>
  </Grid>

</div>

  );
}

export default Header;