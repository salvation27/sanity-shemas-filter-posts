import React, {useState, useEffect } from 'react'
import { client } from '../../client'

const Post2 = () => {

const[posts2,setPosts2] = useState([])

   useEffect(()=>{
     const query = `*[_type == "posts2"] {
         title,
         _id,
         mainImage{
             asset->{
                 _id,
                 url
             },
         },
         body
        }`;
    //    '*[_type == "posts2"]';
     client.fetch(query).then((data) => {
       setPosts2(data);
     });
   },[])

   console.log("posts2", posts2);

  return (
    <div className='post2_app'>
        <div className="container">
            <div className="post2_app_wrap">
                post2
            </div>
        </div>
    </div>
  )
}

export default Post2