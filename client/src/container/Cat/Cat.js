import React from 'react'
// import { client } from '../../client';
import './Cat.css'

const Cat = ({  selectToggleCat, categoryList,selectedCat }) => {
    // console.log("categoryList", selectedCat);
  return (
    <div className="cat_btn">
      <h2>Category</h2>
    <button className={selectedCat === null ? 'active' : ''} onClick={()=>selectToggleCat(null)}  value='all'>All</button>
      {
        categoryList.map((item,i)=><button className={selectedCat === item.name ? 'active' : ''} onClick={(e)=>selectToggleCat(e.target.value)} key={i} value={item.name}>{item.name}</button>)
      }
    </div>
  );
};

export default Cat