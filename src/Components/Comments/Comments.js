// // import React, { useEffect, useState } from 'react';

// // const Comments = ({data, imageData}) => {
// //   const {name,emial}=data;
// //   const {img}=imageData;
// //   const [comments, setComments]=useState([])
// //   console.log(comments);
// //   useEffect(()=>{
// //       const url=`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`
// //         fetch(url)
// //       .then(res=>res.json())
// //       .then(info=>setComments(info))
  
// //     },[data.id])
// //   return (
// //     <div>
// //       {
// //         comments.map(com=><div><h5>{com.email}</h5><p>{com.name}</p></div>)
// //       }
// //     </div>
// //   );
// // };

// // export default Comments;

import React from 'react';
// import { Grid } from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';
// trying***************************************
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


// style***********************
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
    boxShadow:"10px 5px 10px lightgray"
  },
  typography: {
    lineHeight:"0",
    textAlign:"justify",
  
  }
}));


const Comments = (props) => {

  const classes = useStyles();

  const rand=Math.floor( Math.random()* Math.floor(50));
  console.log( rand)
  console.log( props.info.email)
  return (
    
    // tryStrat**************************
    <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar style={{marginTop:"0px",width:"60px",height:"60px"}}>
            <img  src={`https://randomuser.me/api/portraits/men/${rand}.jpg`} alt="" width="60" />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap className={classes.typography} item xs>
              <h4 >{props.info.name}</h4>
              <p><i>{props.info.email}</i></p>           
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
    </div>
    // tryEnd********************************





// {/* <Grid container spacing={0} style={{padding:"3px",}}>

//   <Grid  xs={6} style={{margin:"auto",display: "flex",border:"2px solid lightgray"}}>
//   <Grid  xs={2} >
//   {/* <img style={{width:"60px",borderRadius:"50px",padding:"15px"}} src={props.img[rand].img} alt="" /> */}
//   <img style={{width:"60px",borderRadius:"50px",padding:"15px"}} src={`https://randomuser.me/api/portraits/men/${rand}.jpg`} alt="" />

  

//   </Grid>

//   <Grid  xs={10} style={{textAlign:"center"}}>
//     <h3>{props.info.name}</h3>
//       <p>{props.info.email}</p>
//   </Grid>
// </Grid>

// </Grid> */}

      
      
  );
};

export default Comments;