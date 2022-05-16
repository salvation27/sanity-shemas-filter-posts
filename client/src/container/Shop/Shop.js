import React,{useState,useEffect} from 'react'
import { client } from '../../client';
import ShopItem from '../Shop/ShopItem'
const Shop = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "shop"]';
    client.fetch(query).then((item) => {
      setProducts(item);
    });
    
  }, []);

  // console.log("product", products);



  return (
    <div className="shop_app">
      <div className="container">
        <h2 style={{textAlign:'center',textDecoration:'underline'}}>Shop component</h2>
        <div className="shop_app_wrap dflex jcsb">
          {products.map((item, i) => (
            <ShopItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop