import React, { useState, useEffect } from "react";
import { client } from "../../client";
import Cat from "../Cat/Cat";
import PostItem from "./PostItem";

const Post = () => {
  const [postsItem, setPostsItem] = useState([]);
  const [filter, setFilter] = useState([]);

  const [category, setCategory] = useState([]);
  const [selectedCat, setSelectCat] = useState(null);


 const handleSelectCat = ( value) => {
    setSelectCat(value)
 };


  useEffect(() => {
    const query ='*[_type == "posts"] {title,_id,mainImage,author->{name,image},category->{name}}';
    client.fetch(query).then((data) => {
        setPostsItem(data);
        setFilter(data);
    })

    const query1 = '*[_type == "category"]';
    client.fetch(query1).then((data) => setCategory(data));
  }, []);



  

  const resetCat = () => {
    setSelectCat(null);
  };


  const applyFilters = () => {
    let updatedList = postsItem;

    // фильтер по категориям
    if (selectedCat) {
      updatedList = updatedList.filter((item) => item.category.name === selectedCat);
    }

    setFilter(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCat]);


  return (
    <div className="post_app">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Post component</h1>
        <Cat
          resetCat={resetCat}
          selectedCat={selectedCat}
          selectToggleCat={handleSelectCat}
          categoryList={category}
        />
        <div className="post_items_wrap">
          {filter.length > 0
            ? filter.map((item, i) => <PostItem key={i} item={item} />)
            : "Пусто"}
        </div>
      </div>
    </div>
  );
};

export default Post;
