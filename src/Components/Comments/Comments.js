import React, { useEffect, useState } from 'react';

const Comments = (props) => {
  const {data}=props;
  const [comments, setComments]=useState([])
  console.log(comments);
  useEffect(()=>{
      const url=`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`
        fetch(url)
      .then(res=>res.json())
      .then(info=>setComments(info))
  
    },[data.id])
  return (
    <div>
      {
        comments.map(com=><div><h5>{com.email}</h5><p>{com.name}</p></div>)
      }
    </div>
  );
};

export default Comments;

// ?postId=${data.id}