// //

import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import "./Comments.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: 'hidden',
    padding: theme.spacing(0, 2),
    
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing()}px auto`,
    padding: theme.spacing(3),
    border:"2px solid lightgray",
    boxShadow:"10px 5px 10px lightgray",
    
  },
  typography: {
    lineHeight:"1.2",
    textAlign:"justify", 
  }
}));


const Comments = ({info}) => {
  const{body,name,email}=info
  const [cdate, usecDate]=useState({})
  console.log( cdate)
  const dateFind=Object.keys(cdate)
  const commentsDate=dateFind[Math.floor( Math.random()* Math.floor(5))]
  const classes = useStyles();

  const rand=Math.floor( Math.random()* Math.floor(50));
  

  

useEffect(()=>{
  fetch("https://api.lrs.org/random-date-generator?lim_quarters=10")
  .then(res=>res.json())
  .then(data=>usecDate(data.data))

},[])

  return (
      
    <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar style={{marginTop:"50px",width:"60px",height:"60px"}}>
            <img  src={`https://randomuser.me/api/portraits/men/${rand}.jpg`} alt="" width="60" />
            </Avatar>
          </Grid>
          <Grid item xs-8>            
            <Typography  className={classes.typography} item xs>
            <span><small> <i>Commnents on :{commentsDate}</i></small></span><pre className="hitbtn"><ThumbUpAltIcon className="thumb-icon"/>  <FavoriteBorderIcon className="fav-icon"/>  <ThumbDownIcon className="thumbdown-icon"/>  <CommentIcon className="com-icon"/></pre> 
            <p style={{margin:"-10px"}}>{body}</p>
              <span style={{fontWeight:"bold"}}><PermIdentityIcon style={{marginTop:"20px",fontSize:"1rem",color:"red"}}/> {name}</span>
              <p style={{lineHeight:"1px",marginTop:"0"}}><i><MailOutlineIcon style={{fontSize:"1rem",color:"red"}}/> {email}</i></p>           
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
    </div>
          
  );
};

export default Comments;