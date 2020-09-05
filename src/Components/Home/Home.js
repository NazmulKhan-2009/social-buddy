import React, { useState, useEffect } from 'react';
import Details from '../Details/Details';
import { Grid } from '@material-ui/core';

const Home = () => {
  const [post, setPost]=useState([])
  const [text,setText]=useState("Know Details")
console.log( post)
  useEffect(()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[])

  return (
    <div>
      <Grid container spacing={0} style={{}}>
      
        <Grid item xs={10} style={{margin:"auto"}}>
      {
        post.map(data=><Details data={data} text={text}/>)
      }
      </Grid>
      </Grid>
    </div>
  );
};

export default Home;