import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';
import Comments from '../Comments/Comments';

const DetailsInfo = () => {
  const {userId }=useParams()
  const [post, setPost]=useState([])
  // const [comment, setComment]=useState([])
  console.log( post)
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/posts/${userId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost( data))
  },[])

  // useEffect(()=>{
  //   const url=`https://jsonplaceholder.typicode.com/comments?postId=${userId}`
  //   fetch=(url)
  //   .then(res=>res.json())
  //   .then(data=>console.log( data))

  // },[])

  return (
    <div>
      <Details data={post}/>
      <Comments data={post}/>
    </div>
  );
};

export default DetailsInfo;



