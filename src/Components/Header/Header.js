
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"20px",
    '& > svg': {
        margin: theme.spacing(2),
      },  
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
    color:"black",
    
    
  },
  homeIcon:{
    width:"30px",
    paddingBottom:"5px",
  },
}));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


const Header = () => {
  const classes = useStyles();
  return (
    

    <div className={classes.root}>    
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            SOCIAL BUDDY
          </Typography>        
         
          <Link className={classes.link} href="/home"><Button variant="contained"  color="inherit" ><HomeIcon className={classes.homeIcon} color="secondary" />Home</Button></Link>  

        </Toolbar>
      </AppBar>
    </div>

  );
}

export default Header;