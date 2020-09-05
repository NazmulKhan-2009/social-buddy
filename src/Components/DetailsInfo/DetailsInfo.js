import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';
import Comments from '../Comments/Comments';
import Userdata from '../Userdata/Userdata';

const DetailsInfo = () => {
  const {userId }=useParams()
  const [post, setPost]=useState([])
  const [text,setText]=useState("Click for Comment")
  console.log( post)

  const [comments, setComments]=useState([])
  console.log( comments)
  // const [comment, setComment]=useState([])
  console.log( post)
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/posts/${userId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost( data))
  },[userId]);

  

  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/comments?postId=${userId}`
    fetch(url)
    .then(res=>res.json())
    .then(datas=>setComments(datas))

  },[userId])

  const imageData=Userdata
  console.log(imageData.img,imageData.id );

  return (
    <div>
    {/* <h4>{post.title}</h4>
    <h5>{post.body}</h5> */}
    <Details data={post} text={text} />
    
    {
      comments.map(info=><Comments info={info} img={imageData} />)
    }  
    {/* {
      imageData.map(userImg=><Comments img={userImg.img}/>)
    } */}

      
    </div>
  );
};

export default DetailsInfo;



