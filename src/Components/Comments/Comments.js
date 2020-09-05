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
import { Grid } from '@material-ui/core';

const Comments = (props) => {
  const rand=Math.floor( Math.random()* Math.floor(30));
  console.log( rand)
  console.log( props.info.email)
  return (
    

<Grid container spacing={0} style={{padding:"3px"}}>

  <Grid  xs={6} style={{margin:"auto",display: "flex",border:"2px solid lightgray"}}>
  <Grid  xs={2} >
  <img style={{width:"60px",borderRadius:"50px",padding:"15px"}} src={props.img[rand].img} alt="" />
  </Grid>

  <Grid  xs={10} style={{textAlign:"center"}}>
    <h3>{props.info.name}</h3>
      <p>{props.info.email}</p>
  </Grid>
</Grid>

</Grid>

      
      
  );
};

export default Comments;