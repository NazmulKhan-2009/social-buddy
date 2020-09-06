// //

import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(1),
    border:"2px solid lightgray",
    boxShadow:"10px 5px 10px lightgray",
    
  },
  typography: {
    lineHeight:"1.2",
    textAlign:"justify", 
  }
}));


const Comments = (props) => {

  const classes = useStyles();

  const rand=Math.floor( Math.random()* Math.floor(50));
  console.log( rand)
  console.log( props.info.email)
  return (
      
    <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar style={{marginTop:"40px",width:"60px",height:"60px"}}>
            <img  src={`https://randomuser.me/api/portraits/men/${rand}.jpg`} alt="" width="60" />
            </Avatar>
          </Grid>
          <Grid item xs-8>            
            <Typography  className={classes.typography} item xs>
            <p  style={{}}>{props.info.body}</p>
              <h4 >{props.info.name}</h4>
              <p><i>{props.info.email}</i></p>           
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
    </div>
          
  );
};

export default Comments;