import React from 'react'
import { urlFor } from '../../client';

const PostItem = ({ item: { author, mainImage, slug, title, category } }) => {
  return (
    <div className="post_item">
      <img
        style={{ width: "100%", height: "50px" }}
        src={urlFor(mainImage)}
        alt=""
      />
      <h2>{title}</h2>
      <h1>{category.name}</h1>
      <div className="card_author dflex jcsb">
        <h2>{author.name}</h2>
        <img
          style={{ height: "20px", borderRadius: "100px" }}
          src={urlFor(author.image)}
          alt=""
        />
        <span>{author.bio}</span>
      </div>
      {/* <h3>{slug.current}</h3> */}
      {/* <strong>{author}</strong> */}
    </div>
  );
};

export default PostItem